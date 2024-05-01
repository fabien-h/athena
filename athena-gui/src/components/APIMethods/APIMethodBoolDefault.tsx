import { Select } from "antd";
import { updateMethodField } from "../../datalayer/methodFields";
import { BoolField } from "../../models/methodFields/bool_field";

export const APIMethodBoolDefault = ({
    serviceIndex,
    methodIndex,
    fieldIndex,
    method_type,
    field,
}: {
    serviceIndex: number;
    methodIndex: number;
    fieldIndex: number;
    field: BoolField;
    method_type: 'request' | 'response';
}) => {
    const options = [{
        label: 'true',
        value: 'true',
    }, {
        label: 'false',
        value: 'false',
    }];

    const setDefault = (value: boolean) => {
        field.default = value;

        updateMethodField({
            serviceIndex,
            methodIndex,
            fieldIndex,
            method_type,
            field,
        });
    }

    return (
        <Select
            defaultValue={field.default || ''}
            style={{ width: '100%' }}
            onChange={setDefault}
            options={options}
        />
    )
}