import React from 'react'
import {IonAvatar, IonItem, IonIcon, IonLabel} from '@ionic/react'
import {personCircleOutline} from 'ionicons/icons'
import {Link} from 'react-router-dom'
import decoder from 'jwt-decode'
import Translate from '../../../i18n/Translate'
import {UserInfo} from '../Profile.model'
import Cookies from 'js-cookie'
interface Props {
  jwt: string
}

const Avatar: React.FC<Props> = ({jwt}) => {
  const redirectLink = jwt ? '/profile' : '/auth'
  const userInfo =
    Cookies.get('jwt') && decoder<UserInfo>(Cookies.get('jwt')!).user
  //Render thông tin người dùng dựa vào trạng thái login
  const renderUserInfo = () => {
    if (userInfo) {
      //Nếu đã login, render thông tin người dùng
      return (
        <IonLabel style={{marginLeft: '1em'}}>
          <h3>{userInfo.fullname}</h3>
          <p>{userInfo.username}</p>
          {userInfo.joinDate && <p>{'Thành viên từ: ' + userInfo.joinDate}</p>}
        </IonLabel>
      )
    } else {
      return (
        //Nếu chưa login, có thể đăng nhập / đăng kí
        <IonLabel style={{marginLeft: '1em'}}>
          <h3>{Translate('Welcome to Sale App')}</h3>
          <p>{Translate('Sign in / Register')}</p>
        </IonLabel>
      )
    }
  }
  const renderAvatar = () => {
    if (userInfo) {
      //Nếu có đăng nhập check xem user có avatar không
      return (
        <IonAvatar slot='start'>
          {userInfo!.avatar ? (
            //Nếu có avatar rồi => in ra
            <img src={userInfo!.avatar} />
          ) : (
            //Nếu đăng nhập mà không có avatar => trả avatar là icon
            <IonIcon size='large' icon={personCircleOutline} />
          )}
        </IonAvatar>
      )
    } else {
      //Nếu không đăng nhập => trả avatar là icon
      return <IonIcon size='large' icon={personCircleOutline} />
    }
  }
  return (
    <Link to={redirectLink}>
      <IonItem>
        {renderAvatar()}
        {renderUserInfo()}
      </IonItem>
    </Link>
  )
}

export default Avatar
