interface Item{
    cateID: number, 
    cateName: string, 
    cateCode: string, 
    prodID: number, 
    prodCode: string, 
    prodName: string, 
    price: number, 
    image: string
}

export const addItemToCart = (item:Item) => ({type: "ADD_ITEM_TO_CART", payload: item})