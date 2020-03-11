import {createSelector} from 'reselect'
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

interface State{
    cart: {
        count: number, 
        items: Item[]
    }
}

const selectCart = (state:State) => state.cart

export const selectCartCount = createSelector(
    [selectCart],
    cart => cart.count
)