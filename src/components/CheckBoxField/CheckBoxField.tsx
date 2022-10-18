import {FC, useEffect} from 'react';
import {IField} from "../../types";
import {Checkbox, Form} from "antd";
import {FieldTitle, FieldWrapper} from '../index'
import * as styles from './styles.module.scss'
type Props = {
    fieldData: IField,
    tab: string
}

export const CheckBoxField: FC<Props> = ({fieldData, tab}) => {

    const {slug, title, hint, required, value} = fieldData;
    return <FieldWrapper>
        <Form.Item
            className={styles.checkbox}
            name={`${tab}_${slug}`}
            rules={[{required, message: 'This field is required'}]}
            label={<FieldTitle title={title} hint={hint}/>}
            initialValue={value}
            valuePropName="checked"
        >
            <Checkbox/>
        </Form.Item>
    </FieldWrapper>
}