import decoder from 'jwt-decode'
import Cookies from 'js-cookie'

interface UserInfo {
  user: {
    username: string
    fullname: string
    phone: string
    joinDate?: string
    avatar?: string
  }
}
export const userInfo =
  Cookies.get('jwt') && decoder<UserInfo>(Cookies.get('jwt')!).user

export const addDot = (num: number) => {
  let numToArr = num
    .toString()
    .split('')
    .reverse()
  for (let i = 3; i < numToArr.length; i += 4) {
    numToArr.splice(i, 0, '.')
  }
  let result = numToArr.reverse().join('') + 'đ'

  return result
}

export const getImage = (
  folder: string,
  prodID: number,
  size: number,
  format: string,
) => {
  return (
    process.env.REACT_APP_IMAGE_URL +
    folder +
    '/' +
    prodID.toString() +
    '_s' +
    size.toString() +
    '.' +
    format
  )
}
