import React, {FC} from 'react'
import {IField, ITab} from "../../types";
import {CheckBoxField, InputField, TextAreaField} from "../index";
import {Space, Form, Button} from "antd";
import * as styles from './OptionsContent.module.scss'

type Props = {
    fields: ITab[];
    activeTab: string
}

export const OptionsContent: FC<Props> = ({fields, activeTab}) => {
    const data = fields.filter(items => items.slug === activeTab)[0];
    const pluginData = window['themeoptionsApiNonce'];

    const renderField = (data: IField) => {
        const fields = {
            'input': <InputField key={data.slug} {...data} />,
            'textarea': <TextAreaField key={data.slug} {...data} />,
            'checkbox': <CheckBoxField key={data.slug} {...data} />
        }
        return fields[data.type]
    }
    const onFinish = async (values: any) => {
        const response = await fetch(
            `${pluginData.root}theme-options/options`,
            {
                method: 'PUT',
                body: JSON.stringify({
                    slug: activeTab,
                    values: values,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': pluginData.nonce
                },
            })
        const data = await response.json();

        console.log(data)
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return <div className={styles['options_content']}>
        <h2>{data.title}</h2>
        <div className={styles.content}>
            <Space size={'middle'} direction="vertical" className={styles.space}>
                <Form
                    name="options"
                    onFinish={onFinish}
                    layout="vertical"
                    onFinishFailed={onFinishFailed}
                >
                    {data.options.map((fieldData) => renderField(fieldData))}
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Save</Button>
                    </Form.Item>
                </Form>
            </Space>
        </div>
    </div>;
}