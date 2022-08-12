import {Spin} from 'antd';
import React from 'react';
import {useFetch} from "../hooks";
import {Dashboard, DashboardEmpty} from "./index";

export const App: React.FC = () => {
    const [status, data] = useFetch('fields');
    return (
        <Spin tip="Loading..." spinning={!status}>
            {!data['response']?.length ? <DashboardEmpty/> : <Dashboard fields={data['response']}/>}
        </Spin>
    );
};
