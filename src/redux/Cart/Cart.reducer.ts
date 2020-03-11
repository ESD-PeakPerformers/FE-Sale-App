const initialState = {
    count: 0,
    items: []
}

interface Payload{
    item: {
        cateID: number, 
        cateName: string, 
        cateCode: string, 
        prodID: number, 
        prodCode: string, 
        prodName: string, 
        price: number, 
        image: string
    }
}

const CartReducer = (state=initialState, {type, payload}:{type:string, payload:Payload}) => {
    switch (type) {
        case "ADD_ITEM_TO_CART":
            return{
                ...state, 
                count: state.count + 1, 
                items: [...state.items, payload]
            }
        default:
            return state
        }
}

export default CartReducer
