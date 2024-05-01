import Acta from "acta";
import { ActaKeys } from "../../features/actaKeys";
import type { APISpecGlobal, APISpecService } from "../../models/spec";
import { Select } from "antd";
import { EnumField, EnumLocalization } from "../../models/methodFields/enum_field";
import { updateMethodField } from "../../datalayer/methodFields";

export const APIMethodEnumSelect = ({
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

    const options = [
        {
            label: 'global enums',
            title: 'global_enums',
            options: (globalEnums || []).map((enumItem) => ({
                label: enumItem.name,
                value: enumItem.name,
                localization: EnumLocalization.Values.global,
            })),
        },
        {
            label: 'service enums',
            title: 'service_enums',
            options: (serviceEnums || []).map((enumItem) => ({
                label: enumItem.name,
                value: enumItem.name,
                localization: EnumLocalization.Values.service,
            })),
        },
        {
            label: 'method enums',
            title: 'method_enums',
            options: (methodEnums || []).map((enumItem) => ({
                label: enumItem.name,
                value: enumItem.name,
                localization: EnumLocalization.Values.method,
            })),
        },
    ] as unknown as { value: string; localization: "method" | "service" | "global"; }[];

    const handleChange = (
        _: string,
        options: {
            value: string;
            localization: "method" | "service" | "global";
        } | {
            value: string;
            localization: "method" | "service" | "global";
        }[]) => {
        field.validations = {
            enum_name: Array.isArray(options) ? options[0].value : options.value,
            enum_localization: Array.isArray(options) ? options[0].localization : options.localization,
        };

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
            onChange={handleChange}
            defaultValue={field.validations?.enum_name ?? undefined}
            style={{ width: 150 }}
            options={options}
        />
    )
}