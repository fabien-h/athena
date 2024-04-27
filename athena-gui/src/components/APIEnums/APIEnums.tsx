import { Button, Divider, Flex, Typography } from "antd"
import type { APISpecService } from "../../models/spec"
import { PlusOutlined } from "@ant-design/icons"
import { addEnumToService } from "../../datalayer/serviceEnums"
import { APIEnum } from "./APIEnum"

export const APIEnums = (
    {
        service,
        serviceIndex,
    }: {
        service: APISpecService,
        serviceIndex: number
    }
) => {
    const addEnum = () => {
        addEnumToService(serviceIndex)
    }

    return (
        <>
            <Divider />
            <Flex justify="space-between">
                <Typography.Title level={4}>Common Enums for "{service.name}"</Typography.Title>
                <Button size="small" onClick={addEnum} icon={<PlusOutlined />}>Add an enum</Button>
            </Flex >

            <Flex vertical gap="small">
                {
                    service.enums.map((apiEnum, enumIndex) => (
                        <APIEnum
                            key={enumIndex.toString()}
                            apiEnum={apiEnum}
                            serviceIndex={serviceIndex}
                            enumIndex={enumIndex}
                        />
                    ))
                }
            </Flex>
        </>
    )
}