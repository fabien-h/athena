import { Collapse, Flex, Typography } from "antd";
import type { APISpecMethod } from "../../models/spec";
import { APIMethodFields } from "./APIMethodFields";

export const APIMethod = ({
    apiMethod,
    serviceIndex,
    methodIndex,
}: {
    apiMethod: APISpecMethod;
    serviceIndex: number;
    methodIndex: number;
}) => {
    return (
        <>
            <Collapse
                size="small"
                items={[{
                    key: '1',
                    label: < Flex justify="space-between" >
                        {apiMethod.name}
                    </Flex >,
                    children:
                        <>
                            <Typography.Paragraph>
                                {apiMethod.description}
                            </Typography.Paragraph >

                            <APIMethodFields
                                apiMethod={apiMethod}
                                serviceIndex={serviceIndex}
                                methodIndex={methodIndex}
                                method_type="request"
                            />

                            <br />

                            <APIMethodFields
                                apiMethod={apiMethod}
                                serviceIndex={serviceIndex}
                                methodIndex={methodIndex}
                                method_type="response"
                            />
                        </>
                }]}
            />
        </>
    )
}