import { Divider, Flex, Typography } from "antd"
import type { APISpecService } from "../../../models/spec"
import { APIServiceForm } from "./APIServiceForm"
import { APIMethods } from "../../APIMethods"
import { APIErrors } from "../../APIErrors"
import { APIEnums } from "../../APIEnums"

export const APIService = (
    {
        service,
        serviceIndex,
    }: {
        service: APISpecService,
        serviceIndex: number
    }
) => {

    return <>
        <Divider />
        <Flex justify="space-between">
            <Typography.Title level={3}>{service.name}</Typography.Title>
            <APIServiceForm service={service} serviceIndex={serviceIndex} />
        </Flex>
        <Typography.Paragraph>{service.description}</Typography.Paragraph>

        <div style={{ paddingLeft: 25 }}>
            <APIMethods service={service} serviceIndex={serviceIndex} />
            <APIEnums service={service} serviceIndex={serviceIndex} />
            <APIErrors service={service} serviceIndex={serviceIndex} />
        </div>
    </>
}