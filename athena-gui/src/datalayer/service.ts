import Acta from "acta";
import type { APISpecService } from "../models/spec";
import { ActaKeys } from "../features/actaKeys";
import { updateSpec } from "./updateSpec";

export const updateService = ({
    name,
    description,
    serviceIndex,
}: {
    name: string
    description: string
    serviceIndex: number
}) => {
    const currentServices = Acta.getState(ActaKeys.SPEC_SERVICES) as Array<APISpecService>;

    currentServices[serviceIndex].name = name;
    currentServices[serviceIndex].description = description;

    updateSpec({
        services: currentServices,
    })
}

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

export const deleteService = async (serviceIndex: number) => {
    const currentServices = Acta.getState(ActaKeys.SPEC_SERVICES) as Array<APISpecService>;
    currentServices.splice(serviceIndex, 1);

    updateSpec({
        services: currentServices,
    });
};