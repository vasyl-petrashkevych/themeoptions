import React, {FC} from 'react'
import {IField, ISelect, ITab, IFields} from "../../types";
import {CheckBoxField, InputField, TextAreaField, ImageField} from "../index";
import {Space, Form, Button} from "antd";
import * as styles from './OptionsContent.module.scss'
import {SelectField} from "../SelectField/SelectField";

type Props = {
    fields: ITab[];
    activeTab: string
}

export const OptionsContent: FC<Props> = ({fields, activeTab}) => {
    const data = fields.filter(items => items.slug === activeTab)[0];
    const pluginData = window['themeoptionsApiNonce'];

    const renderField = (data: IField | ISelect, tab: string) => {
        const fields: IFields = {
            input: <InputField key={data.slug} fieldData={data} tab={tab}/>,
            textarea: <TextAreaField key={data.slug} fieldData={data} tab={tab} />,
            checkbox: <CheckBoxField key={data.slug} fieldData={data} tab={tab}/>,
            select: <SelectField key={data.slug} fieldData={data as ISelect} tab={tab}/>,
            image: <ImageField key={data.slug} fieldData={data} tab={tab}/>
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
                    name={activeTab}
                    onFinish={onFinish}
                    layout="vertical"
                    onFinishFailed={onFinishFailed}
                >
                    {data.options.map((fieldData) => renderField(fieldData, activeTab))}
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Save</Button>
                    </Form.Item>
                </Form>
            </Space>
        </div>
    </div>;
}