import React, {EventHandler, FC} from 'react'
import * as styles from "./DashboardSider.module.scss";
import {Layout, Menu} from "antd";
import {ITab} from "../../types";

const {Sider} = Layout;

type Props = {
    fields: ITab[],
    activeTab: string
    menuClick: EventHandler<any>
}

export const DashboardSider: FC<Props> = ({fields, activeTab, menuClick}) => {
    return <Sider
        trigger={null}
        collapsible
        className={styles.sider}
    >
        <div className={styles.logo}>
            <img src={`${window['themeoptionsPlugin'].url}/src/Images/logo.png`} alt='logo'/>
        </div>
        <Menu
            theme="dark"
            mode="inline"
            onSelect={menuClick}
            defaultSelectedKeys={[activeTab]}
            items={fields.map(field => ({
                key: field.slug,
                label: field.title,
            }))
            }
        />
    </Sider>
}