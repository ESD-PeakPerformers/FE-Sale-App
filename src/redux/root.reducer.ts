import {combineReducers} from 'redux'
import cartReducer from './Cart/Cart.reducer'

export default combineReducers({
  cart: cartReducer
})

