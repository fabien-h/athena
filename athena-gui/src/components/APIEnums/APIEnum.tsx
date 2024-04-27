import { Button, Card, Flex, Input, InputNumber, Modal, Table, type TableColumnsType, Typography } from "antd";
import type { APISpecEnum, APISpecEnumValue } from "../../models/spec";
import { APIEnumForm } from "./APIEnumForm";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { addEnumValue, deleteEnumValue, updateEnumValue } from "../../datalayer/serviceEnums";


interface DataType {
    key: string;
    value: number;
    name: string;
    description: string;
}

export const APIEnum = (
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

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Value',
            dataIndex: 'value',
            render: (value, record, index) => <InputNumber
                value={value}
                placeholder="eg. 0"
                onBlur={(event) => updateEnum({
                    ...record,
                    value: Number(event.currentTarget.value),
                }, index)}
            />,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            render: (value, record, index) => <Input
                defaultValue={value}
                placeholder="eg. 0"
                onBlur={(event) => updateEnum({
                    ...record,
                    name: event.currentTarget.value,
                }, index)}
            />,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            render: (value, record, index) => <Input.TextArea
                autoSize
                defaultValue={value}
                placeholder="eg. 0"
                onBlur={(event) => updateEnum({
                    ...record,
                    description: event.currentTarget.value,
                }, index)}
            />,
        },
        {
            title: '',
            dataIndex: 'action',
            render: (_, _record, valueIndex) => (
                <>
                    <Button icon={<DeleteOutlined />} onClick={() => showDeleteConfirm(valueIndex)} />
                </>
            ),
        },
    ];

    const data: Array<DataType> = apiEnum.values.map((value, index) => ({
        key: index.toString(),
        value: value.value,
        name: value.name,
        description: value.description,
    } as DataType));

    const addValue = () => {
        addEnumValue({ serviceIndex, enumIndex });
    };

    const showDeleteConfirm = (valueIndex: number) => {
        Modal.confirm({
            title: 'Delete this value',
            content: 'Are you sure?',
            okText: 'Yes, delete it',
            okType: 'danger',
            cancelText: 'No, cancel',
            centered: true,
            onOk() {
                deleteEnumValue({ serviceIndex, enumIndex, valueIndex })
            },
        });
    };

    const updateEnum = (value: APISpecEnumValue, valueIndex: number) => {
        updateEnumValue({
            serviceIndex,
            enumIndex,
            valueIndex,
            value
        });
    };

    return (
        <Card
            title={<Flex justify="space-between">
                {apiEnum.name}
                <APIEnumForm apiEnum={apiEnum} serviceIndex={serviceIndex} enumIndex={enumIndex} />
            </Flex>}
        >
            <Typography.Paragraph>
                {apiEnum.description}
            </Typography.Paragraph>

            <Table
                columns={columns}
                dataSource={data}
                size="small"
                footer={() => <Flex justify="flex-end">
                    <Button size="small" onClick={addValue} icon={<PlusOutlined />}>Add value</Button>
                </Flex>}
            />
        </Card>
    )
};
