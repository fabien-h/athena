import Acta from "acta";
import type { APISpecService } from "../models/spec";
import { ActaKeys } from "../features/actaKeys";
import { updateSpec } from "./updateSpec";

export const addService = async () => {
    const newService: APISpecService = {
        name: "new service",
        description: "service description",
        enums: [],
        errors: [],
        request_headers: [],
        response_headers: [],
        methods: [],
    };

    const currentServices = Acta.getState(ActaKeys.SPEC_SERVICES) as Array<APISpecService>;

    updateSpec({
        services: [...currentServices, newService],
    })
};