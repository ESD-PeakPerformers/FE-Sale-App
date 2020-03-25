import React, {useState} from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonAlert,
  useIonViewDidEnter,
  IonItemGroup,
  IonLabel,
} from '@ionic/react'
import axios from 'axios'
import Cookies from 'js-cookie'
import translate from '../../i18n/Translate'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {changeLanguage} from '../../redux/Language/Language.action'
import Language from './Language/Language'
import Avatar from './Avatar/Avatar'
import Address from './Address/Address'

const Profile = () => {
  const [showAlert, setShowAlert] = useState({isShow: false, message: ''})
  const [jwt, setJWT] = useState()

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

  return (
    <IonPage>
      {/* Header */}
      <IonHeader className='ion-no-border' translucent={true}>
        <IonToolbar>
          <IonTitle slot='start'>{translate('My account')}</IonTitle>
          <IonButtons slot='end'></IonButtons>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent>
        <Avatar jwt={jwt} />
        <Address />
        <IonItemGroup className='Profile-Section'>
          <IonToolbar>
            <h3 slot='start'>Cài đặt</h3>
          </IonToolbar>
          <Language />
        </IonItemGroup>
        <LogoutButton jwt={jwt} signOut={signOut} />
      </IonContent>

      {/* Thông báo signout thành công */}
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

interface LogoutButtonProps {
  jwt: string
  signOut: () => void
}
const LogoutButton: React.FC<LogoutButtonProps> = ({jwt, signOut}) => {
  return (
    <React.Fragment>
      {jwt && (
        <IonButton expand='block' onClick={signOut}>
          Đăng xuất
        </IonButton>
      )}
    </React.Fragment>
  )
}
export default connect(
  null,
  mapDispatchToProps,
)(Profile)
