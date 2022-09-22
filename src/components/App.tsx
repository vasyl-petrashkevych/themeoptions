import {Spin} from 'antd';
import {FC} from 'react';
import {useFetch} from "../hooks";
import {Dashboard, DashboardEmpty, DashboardErrors} from "./index";

export const App: FC = () => {
    const [status, data, error] = useFetch('fields');

    const renderDashboard = function () {
        if (error) {
            return <DashboardErrors errors={data.response}/>
        } else {
            return !data['response']?.length ? <DashboardEmpty/> : <Dashboard fields={data['response']}/>
        }
    }

    return (
        <Spin tip="Loading..." spinning={!status}>
            {renderDashboard()}
        </Spin>
    );
};
