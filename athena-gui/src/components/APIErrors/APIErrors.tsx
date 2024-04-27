import { Divider, Typography } from "antd"
import type { APISpecService } from "../../models/spec"

export const APIErrors = (
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
            <Typography.Title level={4}>Common Errors for "{service.name}"</Typography.Title>
        </>
    )
}