export interface Product {
  cateID: number
  cateName: string
  cateCode: string
  prodID: number
  prodCode: string
  prodName: string
  price: number
  image: string
  quantity?: number
  rating?: number
}
export interface Category {
  cateID: number
  cateCode: string
  cateName: string
}
