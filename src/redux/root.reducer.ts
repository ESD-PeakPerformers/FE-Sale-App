import {combineReducers} from 'redux'
import cartReducer from './Cart/Cart.reducer'
import languageReducer from './Language/Language.reducer'

export default combineReducers({
	cart: cartReducer,
	language: languageReducer,
})
