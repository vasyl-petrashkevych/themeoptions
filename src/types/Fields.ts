export type ITab = {
    slug: string
    title: string
    options: IField[]
}
export type IField = {
    slug: string
    title: string
    hint: string
    required: Boolean
    value: any
}