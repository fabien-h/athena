import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Empty, Flex, Typography } from "antd";
import { addService } from "../../datalayer/addService";
import Acta from "acta";
import { ActaKeys } from "../../features/actaKeys";
import type { APISpecService } from "../../models/spec";
import { APIService } from "./APIService/APIService";

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
        <div style={{ paddingLeft: 50 }}>
            {
                (services || []).map((service, index) => <APIService
                    key={index.toString()}
                    index={index}
                    service={service}
                />)
            }
        </div>
    </>;
}