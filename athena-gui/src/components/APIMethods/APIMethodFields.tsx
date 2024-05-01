import { Button, Flex, Input, Modal, Select, Switch, Table, type TableColumnsType, Typography } from "antd";
import type { APISpecMethod, APISpecMethodField } from "../../models/spec";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { addMethodField, deleteMethodField, updateMethodField } from "../../datalayer/methodFields";
import { APISpecFieldTypeKeys, type APISpecFieldTypeKeysEnum } from "../../models/methodFields/baseField";
import { APIMethodAddFieldValidation } from "./APIMethodAddFieldValidation";
import { APIMethodEnumSelect } from "./APIMethodEnumSelect";
import { APIMethodEnumDefault } from "./APIMethodEnumDefault";
import { EnumField } from "../../models/methodFields/enum_field";
import { BoolField } from "../../models/methodFields/bool_field";
import { APIMethodBoolDefault } from "./APIMethodBoolDefault";

interface DataType {
    key: string;
    name: string;
    field_type: APISpecFieldTypeKeysEnum;
    description: string;
    default: string;
    required: boolean;
    validations?: Record<string, string>;
}

export const APIMethodFields = ({
    apiMethod,
    serviceIndex,
    methodIndex,
    method_type
}: {
    apiMethod: APISpecMethod;
    serviceIndex: number;
    methodIndex: number;
    method_type: 'request' | 'response';
}) => {
    const updateField = (
        field: APISpecMethodField,
        fieldIndex: number
    ) => updateMethodField({
        serviceIndex,
        methodIndex,
        fieldIndex,
        method_type,
        field,
    })

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Required',
            dataIndex: 'required',
            render: (required, record, index) => <Switch
                checked={required}
                onChange={(checked) => updateField(
                    {
                        ...record,
                        required: checked,
                    },
                    index
                )}
            />
        },
        {
            title: 'Name',
            dataIndex: 'name',
            render: (value, record, index) => <Input
                defaultValue={value}
                placeholder="eg. product_sku"
                onBlur={(event) => updateField({
                    ...record,
                    name: event.currentTarget.value,
                }, index)}
            />,
        },
        {
            title: 'Type',
            dataIndex: 'field_type',
            render: (value, record, index) => <Select
                defaultValue={value}
                style={{ width: '100%' }}
                onChange={(newValue) => updateField({
                    ...record,
                    field_type: newValue,
                    validations: {},
                }, index)}
                options={Object.keys(APISpecFieldTypeKeys).map((fieldType) => ({
                    label: fieldType,
                    value: fieldType,
                }))}
            />,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            render: (value, record, index) => <Input.TextArea
                autoSize
                defaultValue={value}
                placeholder="eg. the stock keeping unit identidfier"
                onBlur={(event) => updateField({
                    ...record,
                    description: String(event.currentTarget.value),
                }, index)}
            />,
        },
        {
            title: 'Example (default value)',
            dataIndex: 'default',
            render: (value, record, fieldIndex) => {
                if (record.field_type === APISpecFieldTypeKeys.Enum) {
                    return <APIMethodEnumDefault
                        serviceIndex={serviceIndex}
                        methodIndex={methodIndex}
                        fieldIndex={fieldIndex}
                        method_type={method_type}
                        field={record as unknown as EnumField}
                    />
                }

                if (record.field_type === APISpecFieldTypeKeys.Bool) {
                    return <APIMethodBoolDefault
                        serviceIndex={serviceIndex}
                        methodIndex={methodIndex}
                        fieldIndex={fieldIndex}
                        method_type={method_type}
                        field={record as unknown as BoolField}
                    />
                }

                return <Input
                    defaultValue={value}
                    placeholder="eg. the stock keeping unit identidfier"
                    onBlur={(event) => updateField({
                        ...record,
                        description: String(event.currentTarget.value),
                    }, fieldIndex)}
                />
            },
        },
        {
            title: 'Validations',
            dataIndex: 'default',
            render: (_, record, fieldIndex) => {
                if (record.field_type === APISpecFieldTypeKeys.Bool) return null;

                if (record.field_type === APISpecFieldTypeKeys.Enum) {
                    return <APIMethodEnumSelect
                        serviceIndex={serviceIndex}
                        methodIndex={methodIndex}
                        fieldIndex={fieldIndex}
                        method_type={method_type}
                        field={record as unknown as EnumField}
                    />
                }

                return <APIMethodAddFieldValidation
                    serviceIndex={serviceIndex}
                    methodIndex={methodIndex}
                    fieldIndex={fieldIndex}
                    method_type={method_type}
                    field={record as APISpecMethodField}
                />
            }
        },
        {
            title: '',
            dataIndex: 'action',
            render: (_, _record, valueIndex) => <Button
                icon={<DeleteOutlined />}
                size='small'
                onClick={() => showDeleteConfirm(valueIndex)}
            />,
        },
    ];

    const showDeleteConfirm = (fieldIndex: number) => {
        Modal.confirm({
            title: 'Delete this field',
            content: 'Are you sure?',
            okText: 'Yes, delete it',
            okType: 'danger',
            cancelText: 'No, cancel',
            centered: true,
            onOk() {
                deleteMethodField({ serviceIndex, methodIndex, fieldIndex, method_type })
            },
        });
    };

    const fields = method_type === "request" ? apiMethod.request_fields : apiMethod.response_fields;
    const data: Array<DataType> = (fields || []).map((field, index) => ({
        key: index.toString(),
        name: field.name,
        field_type: field.field_type,
        description: field.description,
        default: field.default,
        required: field.required,
        validations: field.validations || {},
    }));

    const addField = () => {
        addMethodField({
            serviceIndex,
            methodIndex,
            method_type,
        })
    };

    console.log('---fields ', fields);

    return (
        <>
            <Typography.Title level={5}>
                {method_type === "request" ? "Request Fields" : "Response Fields"}
            </Typography.Title>

            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                size="small"
                footer={() => <Flex justify="flex-end">
                    <Button size="small" onClick={addField} icon={<PlusOutlined />}>Add field</Button>
                </Flex>}
            />
        </>
    )
}