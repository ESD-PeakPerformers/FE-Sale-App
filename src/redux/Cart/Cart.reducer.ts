import Cookies from 'js-cookie'
var jwt = require('jwt-simple')

const cookiesCount =
	Cookies.get('CART') && jwt.decode(Cookies.get('CART')!, 'xxx').totalInCart

const initialState = {
	count: cookiesCount,
}

interface Payload {
	count: number
}

const CartReducer = (
	state = initialState,
	{type, payload}: {type: string; payload: Payload},
) => {
	switch (type) {
		case 'ADD_ITEM_TO_CART':
			return {
				...state,
				count: payload.count,
			}
		default:
			return state
	}
}
export default CartReducer
