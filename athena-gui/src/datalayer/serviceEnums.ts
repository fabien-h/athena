import Acta from "acta";
import { updateSpec } from "./updateSpec"
import { ActaKeys } from "../features/actaKeys";
import type { APISpecEnumValue, APISpecService } from "../models/spec";

export const addEnumToService = (serviceIndex: number) => {
    const currentServices = Acta.getState(ActaKeys.SPEC_SERVICES) as Array<APISpecService>;

    currentServices[serviceIndex].enums.push({
        name: "new_enum",
        description: "enum description",
        values: [],
    })

    updateSpec({
        services: currentServices,
    })
};

export const updateEnum = ({
    serviceIndex,
    enumIndex,
    name,
    description,
    values,
}: {
    serviceIndex: number,
    enumIndex: number,
    name: string,
    description: string,
    values: Array<APISpecEnumValue>
}) => {
    const currentServices = Acta.getState(ActaKeys.SPEC_SERVICES) as Array<APISpecService>;

    currentServices[serviceIndex].enums[enumIndex].name = name;
    currentServices[serviceIndex].enums[enumIndex].description = description;
    currentServices[serviceIndex].enums[enumIndex].values = values;

    updateSpec({
        services: currentServices,
    })
};

export const deleteEnum = ({
    serviceIndex,
    enumIndex,
}: {
    serviceIndex: number,
    enumIndex: number,
}) => {
    const currentServices = Acta.getState(ActaKeys.SPEC_SERVICES) as Array<APISpecService>;

    currentServices[serviceIndex].enums.splice(enumIndex, 1);

    updateSpec({
        services: currentServices,
    })
}

export const addEnumValue = ({
    serviceIndex,
    enumIndex,
}: {
    serviceIndex: number,
    enumIndex: number,
}) => {
    const currentServices = Acta.getState(ActaKeys.SPEC_SERVICES) as Array<APISpecService>;

    currentServices[serviceIndex].enums[enumIndex].values.push({
        value: currentServices[serviceIndex].enums[enumIndex].values.length,
        name: "value_name",
        description: "value description",
    });

    updateSpec({
        services: currentServices,
    })
}

export const deleteEnumValue = ({
    serviceIndex,
    enumIndex,
    valueIndex,
}: {
    serviceIndex: number,
    enumIndex: number,
    valueIndex: number,
}) => {
    const currentServices = Acta.getState(ActaKeys.SPEC_SERVICES) as Array<APISpecService>;

    currentServices[serviceIndex].enums[enumIndex].values.splice(valueIndex, 1);

    updateSpec({
        services: currentServices,
    })
};

export const updateEnumValue = ({
    serviceIndex,
    enumIndex,
    valueIndex,
    value,
}: {
    serviceIndex: number,
    enumIndex: number,
    valueIndex: number,
    value: APISpecEnumValue,
}) => {
    const currentServices = Acta.getState(ActaKeys.SPEC_SERVICES) as Array<APISpecService>;

    currentServices[serviceIndex].enums[enumIndex].values[valueIndex] = value;

    updateSpec({
        services: currentServices,
    })
}