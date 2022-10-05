import React, {FC} from 'react';
import {ISelect} from "../../types";
import {Form, Select} from 'antd';
import {FieldTitle} from "../FieldTitle/FieldTitle";
import {FieldWrapper} from "../FieldWrapper/FieldWrapper";

const {Option} = Select;

export const SelectField: FC<ISelect> = (props) => {
    const {slug, title, hint, required, value, options, placeholder} = props;
    return <FieldWrapper>
        <Form.Item
            name={slug}
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