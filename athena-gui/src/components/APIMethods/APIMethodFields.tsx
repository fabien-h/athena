import { Button, Flex, Table, type TableColumnsType, Typography } from "antd";
import type { APISpecFieldTypeEnum, APISpecMethod } from "../../models/spec";
import { PlusOutlined } from "@ant-design/icons";
import { addMethodField } from "../../datalayer/methodFields";

interface DataType {
    key: string;
    name: number;
    type: APISpecFieldTypeEnum;
    description: string;
    default: string;
    required: boolean;
}


export const APIMethodFields = ({
    apiMethod,
    serviceIndex,
    methodIndex,
    type
}: {
    apiMethod: APISpecMethod;
    serviceIndex: number;
    methodIndex: number;
    type: 'request' | 'response';
}) => {
    const columns: TableColumnsType<DataType> = [
        {
            title: 'Required',
            dataIndex: 'required',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Type',
            dataIndex: 'type',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Example (default value)',
            dataIndex: 'default',
        },
        {
            title: '',
            dataIndex: 'action',
        },
    ];

    const data: Array<DataType> = apiMethod.request_fields.map((field, index) => ({
        key: index.toString(),
        name: field.name,
        type: field.field_type,
        description: field.description,
        default: field.default,
        required: field.required,
    }));

    const addField = () => {
        addMethodField({
            serviceIndex,
            methodIndex,
            type,
        })
    };

    return (
        <>
            <Typography.Title level={5}>Fields</Typography.Title>

            <Table
                columns={columns}
                dataSource={data}
                size="small"
                footer={() => <Flex justify="flex-end">
                    <Button size="small" onClick={addField} icon={<PlusOutlined />}>Add field</Button>
                </Flex>}
            />
        </>
    )
}