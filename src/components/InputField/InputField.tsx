import {FC, useEffect} from 'react';
import {IField} from "../../types";
import {Input, Form} from "antd";
import {FieldTitle, FieldWrapper} from '../index'

export const InputField: FC<IField> = (data) => {
    useEffect(() => console.log('InputField'), [])
    const {slug, title, hint, required, value} = data;
    return <FieldWrapper>
        <Form.Item
            name={slug}
            label={<FieldTitle title={title} hint={hint}/>}
            initialValue={value}
            rules={[{required, message: 'This field is required'}]}
        >
            <Input/>
        </Form.Item>
    </FieldWrapper>
}