import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Empty, Flex, Typography } from "antd";
import Acta from "acta";
import { ActaKeys } from "../../features/actaKeys";
import type { APISpecService } from "../../models/spec";
import { APIService } from "./APIService/APIService";
import { addService } from "../../datalayer/service";

export const APIServices = () => {
    const services = Acta.useActaState(ActaKeys.SPEC_SERVICES) as Array<APISpecService>;

    return <>
        <Divider />
        <Flex justify="space-between" align="center">
            <Typography.Title level={2}>Services</Typography.Title>
            <Button size="small" onClick={addService} icon={<PlusOutlined />}>Add a service</Button>
        </Flex>
        {
            (services || []).length === 0 &&
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<>
                No services yet.<br />
                <Button size="small" onClick={addService} icon={<PlusOutlined />}>Add a service</Button>
            </>} />
        }
        <Flex style={{ paddingLeft: 50 }} vertical gap="small">
            {
                (services || []).map((service, serviceIndex) => <APIService
                    key={serviceIndex.toString()}
                    serviceIndex={serviceIndex}
                    service={service}
                />)
            }
        </Flex>
    </>;
}