import {FC, useEffect} from 'react';
import {IField} from "../../types";
import {Input, Form} from "antd";
import {FieldTitle, FieldWrapper} from '../index'

const {TextArea} = Input;
type Props = {
    fieldData: IField,
    tab: string
}
export const TextAreaField: FC<Props> = ({fieldData, tab}) => {
    const {slug, title, hint, required, value} = fieldData;
    return <FieldWrapper>
        <Form.Item
            name={`${tab}_${slug}`}
            rules={[{required, message: 'This field is required'}]}
            label={<FieldTitle title={title} hint={hint}/>}
            initialValue={value}
        >
            <TextArea rows={4}/>
        </Form.Item>
    </FieldWrapper>
}