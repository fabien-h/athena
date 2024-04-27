import Acta from "acta";
import type { APISpecService } from "../models/spec";
import { ActaKeys } from "../features/actaKeys";
import { updateSpec } from "./updateSpec";

export const updateService = ({
    name,
    description,
    index,
}: {
    name: string
    description: string
    index: number
}) => {
    const currentServices = Acta.getState(ActaKeys.SPEC_SERVICES) as Array<APISpecService>;

    currentServices[index].name = name;
    currentServices[index].description = description;

    updateSpec({
        services: currentServices,
    })
}