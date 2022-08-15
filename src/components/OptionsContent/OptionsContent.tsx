import {FC} from 'react'
import {IField, ITab} from "../../types";
import {CheckBoxField, InputField, TextAreaField} from "../index";
import {Space} from "antd";
import * as styles from './OptionsContent.module.scss'

type Props = {
    fields: ITab[];
    activeTab: string
}

export const OptionsContent: FC<Props> = ({fields, activeTab}) => {
    const data = fields.filter(items => items.slug === activeTab)[0];

    const renderField = (data: IField) => {
        const fields = {
            'input': <InputField key={data.slug} {...data} />,
            'textarea': <TextAreaField key={data.slug} {...data} />,
            'checkbox': <CheckBoxField key={data.slug} {...data} />
        }
        return fields[data.type]
    }

    return <div className={styles['options_content']}>
        <h2>{data.title}</h2>
        <div className={styles.content}>
            <Space size={'middle'} direction="vertical" className={styles.space}>
                {data.options.map((fieldData) => renderField(fieldData))}
            </Space>
        </div>
    </div>;
}