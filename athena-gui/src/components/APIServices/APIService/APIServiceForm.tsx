import { useState } from "react";
import type { APISpecService } from "../../../models/spec";
import { Button, Divider, Drawer, Form, Input } from "antd";
import { EditFilled } from "@ant-design/icons";
import { updateService } from "../../../datalayer/updateService";

export const APIServiceForm = (
    {
        service,
        index
    }: {
        service: APISpecService, index: number
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
            index
        });
        onClose();
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

                <Button danger block>
                    Delete Service
                </Button>
            </Drawer>
        </>
    );
};