import { Anchor } from "antd";
import { ActaKeys } from "../../features/actaKeys";
import Acta from "acta";

export type MenuItem = {
    key: string;
    href: string;
    title: string;
    children?: MenuItem[];
};

export type MenuTree = Array<MenuItem>;

const stateToMenuTree = (
    services: any,
    globals: any,
): MenuTree => {

    const servicesTree = {
        key: '2',
        href: '#main-services',
        title: 'Services',
        children: []
    };

    const globalsTree = {
        key: '3',
        href: '#main-globals',
        title: 'Global',
        children: []
    };

    const Tree: MenuTree = [
        {
            key: '1',
            href: '#main-infos',
            title: 'API Infos',
        },
        servicesTree,
        globalsTree,
    ];


    return Tree;
};

export const SideNav = () => {
    const services = Acta.useActaState(ActaKeys.SPEC_SERVICES);
    const globals = Acta.useActaState(ActaKeys.SPEC_GLOBAL);

    const items = stateToMenuTree(services, globals);

    return <Anchor
        affix={false}
        items={items}
    />
};

/**
 * [
            {
                key: '1',
                href: '#components-anchor-demo-basic',
                title: 'Basic demo',
            },
            {
                key: '2',
                href: '#components-anchor-demo-static',
                title: 'Static demo',
            },
            {
                key: '3',
                href: '#api',
                title: 'API',
                children: [
                    {
                        key: '4',
                        href: '#anchor-props',
                        title: 'Anchor Props',
                    },
                    {
                        key: '5',
                        href: '#link-props',
                        title: 'Link Props',
                    },
                ],
            },
        ]
 */