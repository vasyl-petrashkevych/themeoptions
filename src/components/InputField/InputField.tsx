import {FC, useEffect} from 'react';
import {IField} from "../../types";
import {Input} from "antd";
import {FieldTitle, FieldWrapper} from '../index'

export const InputField: FC<IField> = (data) => {
    useEffect(() => console.log('InputField'), [])
    const {slug, title, hint, required, value} = data;
    return <FieldWrapper>
        <label htmlFor={slug}>
            <FieldTitle title={title} hint={hint} required={required}/>
            <Input name={slug} defaultValue={value} id={slug}/>
        </label>
    </FieldWrapper>
}