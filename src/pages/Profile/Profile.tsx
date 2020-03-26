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
import {useIntl} from 'react-intl'

const Profile = () => {
  const [showAlert, setShowAlert] = useState({isShow: false, message: ''})
  const [jwt, setJWT] = useState()
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

  //Handle signout
  const signOut = () => {
    const successMessage = intl.formatMessage({id: 'Successfully logged out'})
    axios
      .post(process.env.REACT_APP_BASE_URL + 'auth/logout', {})
      .then(() => {
        Cookies.remove('jwt')
        setJWT(null)
        setShowAlert({isShow: true, message: successMessage})
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
        {jwt && <Address />}
        <IonItemGroup className='Profile-Section'>
          <IonToolbar>
            <h3 slot='start'>{translate('Settings')}</h3>
          </IonToolbar>
          <Language />
        </IonItemGroup>
        {jwt && (
          <IonButton
            expand='block'
            className='Button__FloatBottom'
            onClick={signOut}>
            {translate('Logout')}
          </IonButton>
        )}
      </IonContent>

      {/* Thông báo signout thành công */}
      <IonAlert
        isOpen={showAlert.isShow}
        onDidDismiss={dismissHandler}
        header={intl.formatMessage({id: 'Notification'})}
        message={showAlert.message}
        buttons={[intl.formatMessage({id: 'Close'})]}
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
