import {Layout, Button} from 'antd';
import React, {useState} from 'react';
import {ITab} from "../../types";
import {DashboardHeader, OptionsContent} from "./../index";
import {DashboardSider} from "../DashboardSider/DashboardSider";

const {Content} = Layout;

type Props = {
    fields: ITab[];
}

export const Dashboard: React.FC<Props> = ({fields}) => {
    const [activeTab, setActiveTab] = useState<string>(fields[0]['slug']);

    const menuItemClick = ({key}) => {
        setActiveTab(key)
    }

    return (
        <Layout>
            <DashboardSider activeTab={activeTab} menuClick={menuItemClick} fields={fields}/>
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
                </Content>
            </Layout>
        </Layout>
    );
};
