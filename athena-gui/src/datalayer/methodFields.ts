import Acta from "acta";
import { ActaKeys } from "../features/actaKeys";
import type { APISpecMethodField, APISpecService } from "../models/spec";
import { updateSpec } from "./updateSpec";

export const addMethodField = ({
    serviceIndex,
    methodIndex,
    type
}: {
    serviceIndex: number;
    methodIndex: number;
    type: 'request' | 'response';
}) => {
    const currentServices = Acta.getState(ActaKeys.SPEC_SERVICES) as Array<APISpecService>;

    const newField: APISpecMethodField = {
        name: "new_field",
        description: "field description",
        default: "",
        field_type: "String",
        required: false,
    }

    if (type === 'response') {
        currentServices[serviceIndex].methods[methodIndex].response_fields.push(newField)
    } else {
        currentServices[serviceIndex].methods[methodIndex].request_fields.push(newField)
    }

    updateSpec({
        services: currentServices,
    })
}
