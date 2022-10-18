import {FC, ReactElement} from 'react';

export type ITab = {
    slug: string,
    title: string,
    options: IField[],
}
export type IField = {
    slug: string,
    title: string,
    hint: string,
    required: boolean,
    value: any,
    values?: any,
    type: 'input' | 'textarea' | 'image' | 'select'
}

export interface ISelect extends IField {
    options: {
        value: string,
        title: string,
    }[],
    placeholder: string
}

export type IError = {
    debug: Array<any>
    message: string
}

export type IFields =  {
    input: ReactElement
    textarea: ReactElement
    checkbox: ReactElement
    image: ReactElement
    select: ReactElement
}