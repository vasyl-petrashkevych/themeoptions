import {FC, useEffect} from 'react';
import {IField} from "../../types";
import {Checkbox} from "antd";
import {FieldTitle, FieldWrapper} from '../index'

export const CheckBoxField: FC<IField> = (data) => {
    useEffect(() => console.log('CheckBoxField'), [])
    const {slug, title, hint, required, value} = data;
    return <FieldWrapper>
        <label htmlFor={slug}>
            <Checkbox checked={value}><FieldTitle title={title} hint={hint} required={required}/></Checkbox>
        </label>
    </FieldWrapper>
}