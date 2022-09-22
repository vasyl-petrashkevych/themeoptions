import {FC, useEffect} from 'react';
import {IField} from "../../types";
import {Input, Form} from "antd";
import {FieldTitle, FieldWrapper} from '../index'

const {TextArea} = Input;
export const TextAreaField: FC<IField> = (data) => {
    useEffect(() => console.log('TextAreaField'), [])
    const {slug, title, hint, required, value} = data;
    return <FieldWrapper>
        <Form.Item
            name={slug}
            rules={[{required, message: 'This field is required'}]}
            label={<FieldTitle title={title} hint={hint}/>}
            initialValue={value}
        >
            <TextArea rows={4}/>
        </Form.Item>
    </FieldWrapper>
}