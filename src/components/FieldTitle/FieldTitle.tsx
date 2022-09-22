import {FC} from 'react'
import {Popover, Space} from "antd";
import {QuestionCircleTwoTone, InfoCircleTwoTone} from "@ant-design/icons";
import * as styles from './FieldTitle.module.scss'

type Props = {
    title: string
    hint?: string
}

export const FieldTitle: FC<Props> = ({title, hint = ''}) => {
    return (
        <span className={styles.title}>
            <h5>{title}</h5>
            {hint && <Popover
              title={() => <Space><InfoCircleTwoTone twoToneColor="#eb2f96"/>{'Hint'}</Space>}
              content={hint}
              trigger="click"
            >
              <QuestionCircleTwoTone twoToneColor="#52c41a"/>
            </Popover>
            }
        </span>
    )
}
