import {Spin} from 'antd';
import {FC} from 'react';
import {useFetch} from "../hooks";
import {Dashboard, DashboardEmpty, DashboardErrors} from "./index";
import {ITab} from "../types";

type Response = {
    response: ITab[],
}

export const App: FC = () => {
    const [status, data, error] = useFetch<Response>('fields');

    const renderDashboard = function () {
        if (Object.keys(error).length) {
            return <DashboardErrors errors={error}/>
        } else {
            return !data.response?.length ? <DashboardEmpty/> : <Dashboard fields={data.response}/>
        }
    }

    return (
        <Spin tip="Loading..." spinning={!status}>
            {renderDashboard()}
        </Spin>
    );
};
