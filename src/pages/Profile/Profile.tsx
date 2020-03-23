import React, {useState} from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonButtons,
  IonAlert,
  useIonViewDidEnter,
  IonSelect,
  IonSelectOption,
} from '@ionic/react'
import {personCircleOutline} from 'ionicons/icons'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import decoder from 'jwt-decode'
import translate from '../../i18n/Translate'
import {useIntl} from 'react-intl'
import Translate from '../../i18n/Translate'
import {connect} from 'react-redux'
import {State} from '../../redux/root.reducer.type'
import {selectLanguageLocale} from '../../redux/Language/Language.selector'
import {Dispatch} from 'redux'
import {changeLanguage} from '../../redux/Language/Language.action'

interface UserInfo {
  user: {
    username: string
    fullname: string
    phone: string
    joinDate?: string
    avatar?: string
  }
}
interface Props {
  changeLanguage: (locale: string) => void
}

const Profile: React.FC<Props> = ({changeLanguage}) => {
  const [showAlert, setShowAlert] = useState({isShow: false, message: ''})
  const userInfo =
    Cookies.get('jwt') && decoder<UserInfo>(Cookies.get('jwt')!).user
  const [jwt, setJWT] = useState()
  const redirectLink = jwt ? '/profile' : '/auth'
  const intl = useIntl()

  //Cập nhật login status mới nhất mỗi khi render view
  useIonViewDidEnter(() => {
    setJWT(Cookies.get('jwt'))
  }, [])

  //Đóng alert
  const dismissHandler = () =>
    setShowAlert({
      ...showAlert,
      isShow: false,
    })

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
          <h3>{translate('Welcome to Sale App')}</h3>
          <p>{translate('Sign in / Register')}</p>
        </IonLabel>
      )
    }
  }

  //Handle signout
  const signOut = () => {
    axios
      .post(process.env.REACT_APP_BASE_URL + 'auth/logout', {})
      .then(() => {
        Cookies.remove('jwt')
        setJWT(null)
        setShowAlert({isShow: true, message: 'Đăng xuất thành công'})
      })
      .catch(err => {
        setShowAlert({isShow: true, message: err.response.data})
      })
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
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle slot='start'>{translate('My account')}</IonTitle>
          <IonButtons slot='end'></IonButtons>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent>
        <Link to={redirectLink}>
          <IonItem>
            {renderAvatar()}
            {renderUserInfo()}
          </IonItem>
        </Link>
        <IonItem>
          <IonLabel>{Translate('Language')}</IonLabel>
          <IonSelect
            multiple={false}
            cancelText={intl.formatMessage({id: 'Back'})}
            okText={intl.formatMessage({id: 'Select'})}
            onIonChange={(e: any) => {
              changeLanguage(e.detail.value)
            }}>
            <IonSelectOption value='vi'>
              {Translate('Vietnamese')}
            </IonSelectOption>
            <IonSelectOption value='en'>{Translate('English')}</IonSelectOption>
          </IonSelect>
        </IonItem>
        {jwt && (
          <IonButton expand='block' onClick={signOut}>
            Đăng xuất
          </IonButton>
        )}
      </IonContent>
      <IonAlert
        isOpen={showAlert.isShow}
        onDidDismiss={dismissHandler}
        header={'Thông báo'}
        message={showAlert.message}
        buttons={['Đóng']}
      />
    </IonPage>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeLanguage: (locale: string) => dispatch(changeLanguage(locale)),
})
export default connect(
  null,
  mapDispatchToProps,
)(Profile)
