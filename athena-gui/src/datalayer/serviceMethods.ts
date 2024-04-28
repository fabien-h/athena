import Acta from "acta";
import { ActaKeys } from "../features/actaKeys";
import type { APISpecMethod, APISpecService } from "../models/spec";
import { updateSpec } from "./updateSpec";

export const addMethodToService = (serviceIndex: number) => {
    const currentServices = Acta.getState(ActaKeys.SPEC_SERVICES) as Array<APISpecService>;

    const newMethod: APISpecMethod = {
        name: "new_method",
        description: "method description",
        enums: [],
        errors: [],
        request_headers: [],
        request_fields: [],
        response_headers: [],
        response_fields: [],
    }

    currentServices[serviceIndex].methods.push(newMethod)

    updateSpec({
        services: currentServices,
    })
};
