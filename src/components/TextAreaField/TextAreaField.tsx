import {FC, useEffect} from 'react';
import {IField} from "../../types";
import {Input} from "antd";
import {FieldTitle, FieldWrapper} from '../index'

const {TextArea} = Input;

export const TextAreaField: FC<IField> = (data) => {
    useEffect(() => console.log('TextAreaField'), [])
    const {slug, title, hint, required, value} = data;
    return <FieldWrapper>
        <label htmlFor={slug}>
            <FieldTitle title={title} hint={hint} required={required}/>
            <TextArea rows={4} name={slug} defaultValue={value} id={slug} maxLength={4}/>
        </label>
    </FieldWrapper>
}