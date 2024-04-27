import Acta from "acta";
import { ActaKeys } from "../features/actaKeys";

export const loadSpec = async () => {
    const response = await fetch('http://localhost:3000/get-spec');
    const data = await response.json();

    Acta.setState({
        [ActaKeys.SPEC_INFOS]: data?.infos,
        [ActaKeys.SPEC_GLOBAL]: data?.global,
        [ActaKeys.SPEC_SERVICES]: data?.services,
    }, "localStorage");
}