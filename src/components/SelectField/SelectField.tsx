import React, {FC} from 'react';
import {ISelect} from "../../types";
import {Form, Select} from 'antd';
import {FieldTitle} from "../FieldTitle/FieldTitle";
import {FieldWrapper} from "../FieldWrapper/FieldWrapper";

const {Option} = Select;
type Props = {
    fieldData: ISelect,
    tab: string
}

export const SelectField: FC<Props> = ({fieldData, tab}) => {
    const {slug, title, hint, required, value, options, placeholder} = fieldData;

    return <FieldWrapper>
        <Form.Item
            name={`${tab}_${slug}`}
            label={<FieldTitle title={title} hint={hint}/>}
            initialValue={value !== '' ? value : null}
            rules={[{required, message: 'This field is required'}]}
        >
            <Select placeholder={placeholder} allowClear>
                {options.map(option => <Option key={option.value} value={option.value}>{option.title}</Option>)}
            </Select>
        </Form.Item>
    </FieldWrapper>
};