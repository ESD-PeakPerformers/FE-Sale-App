import decoder from 'jwt-decode'
import Cookies from 'js-cookie'

export const userInfo = Cookies.get('jwt') && decoder(Cookies.get('jwt')).user;

export const addDot = (num) => {
  let numToArr = num.toString().split("").reverse()
  for (let i = 3; i < numToArr.length; i += 4){
    numToArr.splice(i, 0, ".")
  }
  let result = numToArr.reverse().join("") + "đ"
  
  return result
};

export const getImage = (prodID, size,format) => {
  return process.env.REACT_APP_IMAGE_URL + prodID.toString() + '_s' + size.toString() + "." + format
}