interface Item {
  cateID: number
  cateName: string
  cateCode: string
  prodID: number
  prodCode: string
  prodName: string
  price: number
  image: string
}

export interface State {
  cart: {
    count: number
    items: Item[]
  }
  language: {
    locale: string
  }
}
