import { Layout, theme } from "antd";
import { SideNav } from "../SideNav";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [collapsed, setCollapsed] = useState(false);

    return <Layout
        style={{ minHeight: '100vh' }}
    >
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
                background: colorBgContainer,
                bottom: 0,
                height: '100vh',
                left: 0,
                overflow: 'auto',
                position: 'fixed',
                top: 0,
                borderRight: '1px solid #eee',
            }}
            width={200}
        >
            <SideNav />
        </Sider>

        <Layout style={{ marginLeft: 200, padding: 25 }}>
            {children}
        </Layout>
    </Layout>
};