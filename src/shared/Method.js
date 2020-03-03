import decoder from 'jwt-decode'
import Cookies from 'js-cookie'

export const userInfo = Cookies.get('jwt') && decoder(Cookies.get('jwt')).user;