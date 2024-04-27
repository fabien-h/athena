import Acta from "acta";
import type { APIInfos, APISpec, APISpecGlobal, APISpecService } from "../models/spec";
import { ActaKeys } from "../features/actaKeys";

export type UpdateSpecParams = {
    infos?: APIInfos;
    global?: APISpecGlobal;
    services?: Array<APISpecService>;
}

export const updateSpec = async ({
    infos,
    global,
    services,
}: UpdateSpecParams) => {
    const updatedInfos = (infos || Acta.getState(ActaKeys.SPEC_INFOS)) as APIInfos;
    const updatedGlobals = (global || Acta.getState(ActaKeys.SPEC_GLOBAL)) as APISpecGlobal;
    const updatedServices = (services || Acta.getState(ActaKeys.SPEC_SERVICES)) as Array<APISpecService>;

    if (infos) {
        Acta.setState({ [ActaKeys.SPEC_INFOS]: updatedInfos }, "localStorage");
    }
    if (global) {
        Acta.setState({ [ActaKeys.SPEC_GLOBAL]: updatedGlobals }, "localStorage");
    }
    if (services) {
        Acta.setState({ [ActaKeys.SPEC_SERVICES]: [...updatedServices] }, "localStorage");
    }

    const spec: APISpec = {
        infos: updatedInfos,
        global: updatedGlobals,
        services: updatedServices,
    };

    await fetch('http://localhost:3000/update-spec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(spec),
    });
};