import { Button, Collapse, Flex, Input, Modal, Table, type TableColumnsType, Typography } from "antd";
import type { APISpecEnum, APISpecEnumValue } from "../../models/spec";
import { APIEnumForm } from "./APIEnumForm";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { addEnumValue, deleteEnumValue, updateEnumValue } from "../../datalayer/serviceEnums";


interface DataType {
    key: string;
    value: string;
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
            render: (value, record, index) => <Input
                defaultValue={value}
                placeholder="eg. my_value"
                onBlur={(event) => updateEnum({
                    ...record,
                    value: event.currentTarget.value,
                }, index)}
            />,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            render: (value, record, index) => <Input.TextArea
                autoSize
                defaultValue={value}
                placeholder="eg. this value is used for..."
                onBlur={(event) => updateEnum({
                    ...record,
                    description: event.currentTarget.value,
                }, index)}
            />,
        },
        {
            title: '',
            dataIndex: 'action',
            render: (_, _record, valueIndex) => <Button
                icon={<DeleteOutlined />}
                onClick={() => showDeleteConfirm(valueIndex)}
            />,
        },
    ];

    const data: Array<DataType> = apiEnum.values.map((value, index) => ({
        key: index.toString(),
        value: value.value,
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
        <Collapse
            size="small"
            items={[{
                key: '1',
                label: apiEnum.name,
                children:
                    <>
                        <Flex justify="space-between" align="flex-start">
                            <Typography.Paragraph>
                                {apiEnum.description}
                            </Typography.Paragraph>
                            <APIEnumForm apiEnum={apiEnum} serviceIndex={serviceIndex} enumIndex={enumIndex} />
                        </Flex>

                        <Table
                            columns={columns}
                            dataSource={data}
                            size="small"
                            pagination={false}
                            footer={() => <Flex justify="flex-end">
                                <Button size="small" onClick={addValue} icon={<PlusOutlined />}>Add value</Button>
                            </Flex>}
                        />
                    </>
            }]}
        />
    )
};
