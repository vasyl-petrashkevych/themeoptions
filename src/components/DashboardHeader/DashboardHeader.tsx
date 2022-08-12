import {FC} from 'react'
import {Layout} from 'antd'
import * as styles from './style.module.scss'

const {Header} = Layout;

export const DashboardHeader: FC = () => {
    const pluginData = window['themeoptionsPlugin']
    return (
        <Header className={styles.header}>
            <h2>{pluginData.title}</h2>
            <p>v{pluginData.version}</p>
        </Header>)
}