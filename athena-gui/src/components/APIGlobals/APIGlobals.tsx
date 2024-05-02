import { PlusOutlined } from "@ant-design/icons"
import { Button, Divider, Flex, Typography } from "antd"

export const APIGlobals = () => {
    return <>
        <Divider />
        <Flex justify="space-between" align="center">
            <Typography.Title level={2}>API Globals</Typography.Title>
            <Button size="small" icon={<PlusOutlined />}>Add a service</Button>


        </Flex>
    </>
}