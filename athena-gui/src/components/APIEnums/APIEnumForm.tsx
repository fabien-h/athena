import { useState } from "react";
import type { APISpecEnum } from "../../models/spec"
import { Button, Divider, Drawer, Form, Input, Modal } from "antd";
import { EditFilled } from "@ant-design/icons";
import { deleteEnum, updateEnum } from "../../datalayer/serviceEnums";

export const APIEnumForm = (
    {
        apiEnum,
        serviceIndex,
        enumIndex,
    }: {
        apiEnum: APISpecEnum,
        serviceIndex: number
        enumIndex: number
    }
) => {
    const [open, setOpen] = useState(false);

    const onClose = () => {
        setOpen(false);
    };

    const onFinish = ({
        name,
        description
    }: {
        name: string;
        description: string;
    }) => {
        updateEnum({
            serviceIndex,
            enumIndex,
            name,
            description,
            values: apiEnum.values,
        })
        onClose();
    };

    const showDeleteConfirm = () => {
        Modal.confirm({
            title: `Delete ${apiEnum.name}`,
            content: 'Are you sure?',
            okText: 'Yes, delete it',
            okType: 'danger',
            cancelText: 'No, cancel',
            centered: true,
            onOk() {
                deleteEnum({ serviceIndex, enumIndex })
            },
        });
    };

    return (
        <>
            <Button size='small' type="default" onClick={() => setOpen(true)} icon={<EditFilled />} />
            <Drawer
                title="Enum Configuration"
                width={300}
                onClose={onClose}
                open={open}
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
            >
                <Form layout="vertical" hideRequiredMark onFinish={onFinish}>
                    <Form.Item
                        name="name"
                        label="Service Name"
                        rules={[{ required: true, message: 'Your Enum needs a name' }]}
                        initialValue={apiEnum.name}
                    >
                        <Input placeholder="eg: country_codes" />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="API Description"
                        rules={[
                            {
                                required: true,
                                message: 'Your enum needs a description',
                            },
                        ]}
                        initialValue={apiEnum.description}
                    >
                        <Input.TextArea rows={4} placeholder="eg: List of all country codes according to the ISO 3166." />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" block>
                        Update
                    </Button>
                </Form>

                <Divider />

                <Button danger block onClick={showDeleteConfirm}>
                    Delete Enum
                </Button>
            </Drawer>
        </>
    );
}