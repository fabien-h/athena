import Acta from "acta";
import { ActaKeys } from "../../features/actaKeys";
import { Flex, Tag, Typography } from "antd";
import Title from "antd/es/typography/Title";
import type { APIInfos as APIInfosType } from "../../models/spec";
import { APIInfosForm } from "./APIInfosForm";

export const APIInfos = () => {
    const infos: APIInfosType = Acta.useActaState(ActaKeys.SPEC_INFOS) as APIInfosType;

    return (
        <>
            <Flex justify="space-between">
                <Flex align="flex-start" gap="small">
                    <Title>{infos.name}</Title>
                    <Tag color="#000">{infos.version}</Tag>
                </Flex>

                <APIInfosForm />
            </Flex>

            <Typography.Paragraph>
                {infos.description}
            </Typography.Paragraph>
            <Typography.Link href={infos.licence.url} target="_blank">
                {infos.licence.name}
            </Typography.Link>
        </>
    );
}