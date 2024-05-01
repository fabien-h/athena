import { PlusOutlined } from "@ant-design/icons"
import { Button, Drawer, Form, Input, Select, Typography } from "antd"
import type { APISpecMethodField } from "../../models/spec";
import { useEffect, useState } from "react";
import { getPossibleValidations } from "./validations";

export const APIMethodAddFieldValidation = ({
    serviceIndex,
    methodIndex,
    fieldIndex,
    method_type,
    field
}: {
    serviceIndex: number;
    methodIndex: number;
    fieldIndex: number;
    field: APISpecMethodField;
    method_type: 'request' | 'response';
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const [validationOptions, setValidationOptions] = useState([]);

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
        // updateEnum({
        //     serviceIndex,
        //     enumIndex,
        //     name,
        //     description,
        //     values: apiEnum.values,
        // })
        onClose();
    };

    useEffect(() => {
        setValidationOptions(getPossibleValidations(field.field_type));
    }, [field.field_type]);

    return <>
        <Button size="small" onClick={showDrawer} icon={<PlusOutlined />} />
        <Drawer
            title="Add a validation"
            width={300}
            onClose={onClose}
            open={open}
            styles={{
                body: {
                    paddingBottom: 80,
                },
            }}
        >
            <Typography.Paragraph>
                {`Since "${field.name}" is of type ${field.field_type}, you can add:`}
            </Typography.Paragraph>

            {
                open && <Select
                    defaultValue={validationOptions[0]}
                    style={{ width: '100%' }}
                    // onChange={(newValue) => updateField({
                    //     ...record,
                    //     field_type: newValue,
                    //     validations: {},
                    // }, index)}
                    options={validationOptions}
                />
            }


            <Form layout="vertical" hideRequiredMark onFinish={onFinish}>
                <Form.Item
                    name="name"
                    label="Service Name"
                    rules={[{ required: true, message: 'Your Enum needs a name' }]}
                // initialValue={apiEnum.name}
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
                >
                    <Input.TextArea rows={4} placeholder="eg: List of all country codes according to the ISO 3166." />
                </Form.Item>

                <Button type="primary" htmlType="submit" block>
                    Update
                </Button>
            </Form>
        </Drawer>
    </>
}