import { Divider, Flex, Typography } from "antd"
import type { APISpecService } from "../../../models/spec"
import { APIServiceForm } from "./APIServiceForm"
import { APIMethods } from "../../APIMethods"
import { APIErrors } from "../../APIErrors"
import { APIEnums } from "../../APIEnums"
import { APIHeaders } from "../../APIHeaders"

export const APIService = (
    {
        service,
        index,
    }: {
        service: APISpecService,
        index: number
    }
) => {

    return <>
        <Divider />
        <Flex justify="space-between">
            <Typography.Title level={3}>{service.name}</Typography.Title>
            <APIServiceForm service={service} index={index} />
        </Flex>
        <Typography.Paragraph>{service.description}</Typography.Paragraph>

        <div style={{ paddingLeft: 25 }}>
            <APIMethods />
            <APIEnums />
            <APIErrors />
            <APIHeaders />
        </div>
    </>
}