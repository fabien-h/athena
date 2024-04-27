import { EditFilled } from '@ant-design/icons';
import { useState } from 'react';
import { Button, Drawer, Form, Input } from 'antd';
import Acta from 'acta';
import { ActaKeys } from '../../features/actaKeys';
import type { APIInfos as APIInfosType } from "../../models/spec";
import { updateSpec } from '../../datalayer/updateSpec';

export const APIInfosForm = () => {
    const infos: APIInfosType = Acta.useActaState(ActaKeys.SPEC_INFOS) as APIInfosType;
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onFinish = (values: {
        name: string;
        description: string;
        version: string;
        licenceName: string;
        licenceURL: string;
    }) => {
        const infos: APIInfosType = {
            name: values.name,
            description: values.description,
            version: values.version,
            licence: {
                name: values.licenceName,
                url: values.licenceURL,
            }
        };
        updateSpec({ infos });
        onClose();
    };

    return (
        <>
            <Button type="default" onClick={showDrawer} icon={<EditFilled />} />
            <Drawer
                title="API Infos"
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
                        label="API Name"
                        rules={[{ required: true, message: 'Your API needs a name' }]}
                        initialValue={infos.name}
                    >
                        <Input placeholder="eg: Products store" />
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
                        initialValue={infos.description}
                    >
                        <Input.TextArea rows={4} placeholder="eg: This API manages our products inventory." />
                    </Form.Item>
                    <Form.Item
                        name="version"
                        label="API Version (semver)"
                        rules={[{ required: true, message: 'Your API needs a version' }]}
                        initialValue={infos.version}
                    >
                        <Input placeholder="eg: 1.2.3" />
                    </Form.Item>
                    <Form.Item
                        name="licenceName"
                        label="API Licence Name"
                        initialValue={infos.licence.name}
                    >
                        <Input placeholder="eg: MIT" />
                    </Form.Item>
                    <Form.Item
                        name="licenceURL"
                        label="API Licence URL"
                        initialValue={infos.licence.url}
                    >
                        <Input placeholder="eg: https://spdx.org/licenses/MIT.html" />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" block>
                        Update
                    </Button>
                </Form>
            </Drawer>
        </>
    );
};
