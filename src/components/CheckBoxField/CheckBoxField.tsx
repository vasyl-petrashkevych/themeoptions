import {FC, useEffect} from 'react';
import {IField} from "../../types";
import {Checkbox, Form} from "antd";
import {FieldTitle, FieldWrapper} from '../index'
import * as styles from './styles.module.scss'

export const CheckBoxField: FC<IField> = (data) => {
    useEffect(() => console.log('CheckBoxField'), [])
    const {slug, title, hint, required, value} = data;
    return <FieldWrapper>
        <Form.Item
            className={styles.checkbox}
            name={slug}
            rules={[{required, message: 'This field is required'}]}
            label={<FieldTitle title={title} hint={hint}/>}
            initialValue={value}
            valuePropName="checked"
        >
            <Checkbox/>
        </Form.Item>
    </FieldWrapper>
}