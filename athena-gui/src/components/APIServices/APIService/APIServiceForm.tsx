import { useState } from "react";
import type { APISpecService } from "../../../models/spec";
import { Button, Divider, Drawer, Form, Input, Modal } from "antd";
import { EditFilled } from "@ant-design/icons";
import { deleteService, updateService } from "../../../datalayer/service";

export const APIServiceForm = (
    {
        service,
        serviceIndex
    }: {
        service: APISpecService, serviceIndex: number
    }
) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

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
        updateService({
            name: name,
            description: description,
            serviceIndex
        });
        onClose();
    };

    const showDeleteConfirm = () => {
        Modal.confirm({
            title: `Delete ${service.name}`,
            content: 'Are you sure?',
            okText: 'Yes, delete it',
            okType: 'danger',
            cancelText: 'No, cancel',
            centered: true,
            onOk() {
                deleteService(serviceIndex)
            },
        });
    };

    return (
        <>
            <Button type="default" onClick={showDrawer} icon={<EditFilled />} />
            <Drawer
                title="Service Configuration"
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
                        rules={[{ required: true, message: 'Your Service needs a name' }]}
                        initialValue={service.name}
                    >
                        <Input placeholder="eg: Managing employees roles" />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="API Description"
                        rules={[
                            {
                                required: true,
                                message: 'please enter url description',
                            },
                        ]}
                        initialValue={service.description}
                    >
                        <Input.TextArea rows={4} placeholder="eg: This API manages our products inventory." />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" block>
                        Update
                    </Button>
                </Form>

                <Divider />

                <Button danger block onClick={showDeleteConfirm}>
                    Delete Service
                </Button>
            </Drawer>
        </>
    );
};