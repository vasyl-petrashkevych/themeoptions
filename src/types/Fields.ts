export type ITab = {
    slug: string
    title: string
    options: IField[]
}
export type IField = {
    slug: string
    title: string
    hint: string
    required: boolean
    value: any
    values?: any
    type: 'input' | 'textarea' | 'image'
}

export type IError = {
    debug: Array<any>
    message: string
}