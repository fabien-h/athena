import Acta from "acta";
import { ActaKeys } from "../features/actaKeys";
import type { APISpecMethodField, APISpecService } from "../models/spec";
import { updateSpec } from "./updateSpec";

export const addMethodField = ({
    serviceIndex,
    methodIndex,
    method_type
}: {
    serviceIndex: number;
    methodIndex: number;
    method_type: 'request' | 'response';
}) => {
    const currentServices = Acta.getState(ActaKeys.SPEC_SERVICES) as Array<APISpecService>;

    const newField: APISpecMethodField = {
        name: "new_field",
        description: "field description",
        default: "",
        field_type: "String",
        required: false,
    }

    if (method_type === 'response') {
        currentServices[serviceIndex].methods[methodIndex].response_fields.push(newField)
    } else {
        currentServices[serviceIndex].methods[methodIndex].request_fields.push(newField)
    }

    updateSpec({
        services: currentServices,
    })
}

export const updateMethodField = ({
    serviceIndex,
    methodIndex,
    fieldIndex,
    method_type,
    field
}: {
    serviceIndex: number;
    methodIndex: number;
    fieldIndex: number;
    method_type: 'request' | 'response';
    field: APISpecMethodField;
}) => {
    const currentServices = Acta.getState(ActaKeys.SPEC_SERVICES) as Array<APISpecService>;

    if (method_type === 'response') {
        currentServices[serviceIndex].methods[methodIndex].response_fields[fieldIndex] = field;
    } else {
        currentServices[serviceIndex].methods[methodIndex].request_fields[fieldIndex] = field;
    }

    updateSpec({
        services: currentServices,
    })
}

export const deleteMethodField = ({
    serviceIndex,
    methodIndex,
    fieldIndex,
    method_type
}: {
    serviceIndex: number;
    methodIndex: number;
    fieldIndex: number;
    method_type: 'request' | 'response';
}) => {
    const currentServices = Acta.getState(ActaKeys.SPEC_SERVICES) as Array<APISpecService>;

    if (method_type === 'response') {
        currentServices[serviceIndex].methods[methodIndex].response_fields.splice(fieldIndex, 1);
    } else {
        currentServices[serviceIndex].methods[methodIndex].request_fields.splice(fieldIndex, 1);
    }

    updateSpec({
        services: currentServices,
    })
}
