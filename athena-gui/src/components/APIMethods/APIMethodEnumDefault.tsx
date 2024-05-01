import Acta from "acta";
import type { APISpecEnum, APISpecGlobal, APISpecService } from "../../models/spec";
import { ActaKeys } from "../../features/actaKeys";
import { type EnumField, EnumLocalization } from "../../models/methodFields/enum_field";
import { Select } from "antd";
import { updateMethodField } from "../../datalayer/methodFields";

export const APIMethodEnumDefault = ({
    serviceIndex,
    methodIndex,
    fieldIndex,
    method_type,
    field,
}: {
    serviceIndex: number;
    methodIndex: number;
    fieldIndex: number;
    field: EnumField;
    method_type: 'request' | 'response';
}) => {
    const globals = Acta.useActaState(ActaKeys.SPEC_GLOBAL) as APISpecGlobal;
    const services = Acta.useActaState(ActaKeys.SPEC_SERVICES) as Array<APISpecService>;

    const globalEnums = globals.enums;
    const serviceEnums = services[serviceIndex].enums;
    const methodEnums = services[serviceIndex].methods[methodIndex].enums;

    let currentEnum: APISpecEnum;

    if (field.validations.enum_localization === EnumLocalization.Values.global) {
        currentEnum = globalEnums.find((enumItem) => enumItem.name === field.validations.enum_name) as unknown as APISpecEnum;
    } else if (field.validations.enum_localization === EnumLocalization.Values.service) {
        currentEnum = serviceEnums.find((enumItem) => enumItem.name === field.validations.enum_name) as unknown as APISpecEnum;
    } else {
        currentEnum = methodEnums.find((enumItem) => enumItem.name === field.validations.enum_name) as unknown as APISpecEnum;
    }

    const options = currentEnum?.values.map((enumValue) => ({
        label: enumValue.value,
        value: enumValue.value,
    }));

    const setDefault = (value: string) => {
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