import {Layout, Menu, Button} from 'antd';
import React, {useState} from 'react';
import {ITab} from "../../types";
import {DashboardHeader, OptionsContent} from "./../index";
import * as styles from './Dashboard.module.scss'

type Props = {
    fields: ITab[];
}
const {Sider, Content} = Layout;

export const Dashboard: React.FC<Props> = ({fields}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>(fields[0]['slug']);

    const menuItemClick = ({item, key, keyPath, domEvent}) => {
        setActiveTab(key)
    }

    return (
        <Layout>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                className={styles.sider}
            >
                <div className={styles.logo}>
                    <img src={`${window['themeoptionsPlugin'].url}/src/Images/logo.png`} alt='logo'/>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    onSelect={menuItemClick}
                    defaultSelectedKeys={[activeTab]}
                    items={fields.map(field => ({
                        key: field.slug,
                        label: field.title,
                    }))
                    }
                />
            </Sider>
            <Layout className="site-layout">
                <DashboardHeader/>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <OptionsContent fields={fields} activeTab={activeTab}/>
                    <Button type="primary">Save</Button>
                </Content>
            </Layout>
        </Layout>
    );
};
