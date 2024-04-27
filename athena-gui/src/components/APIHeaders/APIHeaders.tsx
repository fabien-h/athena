import { Button, Divider, Flex, Typography } from "antd"
// import type { APISpecService } from "../../models/spec"
import { PlusOutlined } from "@ant-design/icons"

export const APIHeaders = (
    // {
    //     service,
    //     serviceIndex,
    // }: {
    //     service: APISpecService,
    //     serviceIndex: number
    // }
) => {
    return (
        <>
            <Divider />
            <Flex justify="space-between">
                <Typography.Title level={4}>Common Headers</Typography.Title>
                <Button size="small" icon={<PlusOutlined />}>Add a header</Button>
            </Flex >
        </>
    )
}