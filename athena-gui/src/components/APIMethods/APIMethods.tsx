import { Button, Divider, Flex, Typography } from "antd"
import type { APISpecService } from "../../models/spec"
import { PlusOutlined } from "@ant-design/icons"
import { addMethodToService } from "../../datalayer/serviceMethods"
import { APIMethod } from "./APIMethod"

export const APIMethods = (
    {
        service,
        serviceIndex,
    }: {
        service: APISpecService,
        serviceIndex: number
    }
) => {
    const addMethod = () => {
        addMethodToService(serviceIndex)
    }

    return (
        <>
            <Divider />
            <Flex justify="space-between">
                <Typography.Title level={4}>Methods for "{service.name}"</Typography.Title>
                <Button size="small" onClick={addMethod} icon={<PlusOutlined />}>Add a method</Button>
            </Flex >

            <Flex vertical gap="small">
                {
                    service.methods.map((apiMethod, methodIndex) => (
                        <APIMethod
                            key={methodIndex.toString()}
                            apiMethod={apiMethod}
                            serviceIndex={serviceIndex}
                            methodIndex={methodIndex}
                        />
                    ))
                }
            </Flex>
        </>
    )
}