import React, {FC} from 'react';
import {IField} from "../../types";
import {FieldWrapper, ImageItem} from "../index";
import {Form} from "antd";
import {FieldTitle} from "../FieldTitle/FieldTitle";


type Props = {
    fieldData: IField,
    tab: string
}

export const ImageField: FC<Props> = ({fieldData, tab}) => {
    const {slug, title, hint, required, value} = fieldData;


    return <FieldWrapper>
        <Form.Item
            name={`${tab}_${slug}`}
            label={<FieldTitle title={title} hint={hint}/>}
            initialValue={value}
            rules={[{required, message: 'This field is required'}]}
        >
            <ImageItem title={title}/>
        </Form.Item>
    </FieldWrapper>
};

