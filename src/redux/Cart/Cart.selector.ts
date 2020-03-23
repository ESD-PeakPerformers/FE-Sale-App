import {createSelector} from 'reselect'
import {State} from '../root.reducer.type'

const selectCart = (state:State) => state.cart

export const selectCartCount = createSelector(
    [selectCart],
    cart => cart.count
)