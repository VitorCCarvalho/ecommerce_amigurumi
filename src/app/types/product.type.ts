export interface Product{
    id: number
    name: string
    price: number
    imgSrc: string
    desc: string
    sale?: boolean
    salePrice?: number
}