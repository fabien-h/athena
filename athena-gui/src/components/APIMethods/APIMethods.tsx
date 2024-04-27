import { Divider, Typography } from "antd"
import type { APISpecService } from "../../models/spec"

export const APIMethods = (
    {
        service,
        serviceIndex,
    }: {
        service: APISpecService,
        serviceIndex: number
    }
) => {
    return (
        <>
            <Divider />
            <Typography.Title level={4}>Methods for "{service.name}"</Typography.Title>
        </>
    )
}