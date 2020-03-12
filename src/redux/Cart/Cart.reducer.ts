const initialState = {
    count: 0,
}

interface Payload{
    count: number
}

const CartReducer = (state=initialState, {type, payload}:{type:string, payload:Payload}) => {
    switch (type) {
        case "ADD_ITEM_TO_CART":
            return{
                ...state, 
                count: state.count + payload.count, 
            }
        default:
            return state
        }
}

export default CartReducer
