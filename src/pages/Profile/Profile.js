import React, {useState, useEffect} from 'react';
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
  useIonViewDidEnter
} from '@ionic/react';
import {personCircleOutline} from 'ionicons/icons'
import {cartOutline} from 'ionicons/icons'
import {Link} from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie'
import decoder from 'jwt-decode'

const Profile = () => {
  const [showAlert,
    setShowAlert] = useState({isShow: false, message: ''})

  const [jwt,
    setJWT] = useState()
  const userInfo = jwt && decoder(jwt).user

  //Cập nhật login status mới nhất mỗi khi render view
  useIonViewDidEnter(() => {
    setJWT(Cookies.get('jwt'))
  }, [])

  //Render thông tin người dùng dựa vào trạng thái login
  const renderUserInfo = () => {
    if (jwt) {
      return (
        <React.Fragment>
          <h3>{userInfo.fullname}</h3>
          <p>{userInfo.username}</p>
          <p>{"Thành viên từ: " + userInfo.contractDate}</p>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <h3>Chào mừng bạn đến với DIK.</h3>
          <p>Đăng nhập / Đăng ký</p>
        </React.Fragment>
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
        setShowAlert({isShow: true, message: "Đăng xuất thành công"})
      })
      .catch(err => {
        setShowAlert({isShow: true, message: err.response.data})
      })
  }

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle slot='start'>Cá nhân</IonTitle>
          <IonButtons slot="end">
            <IonButton href="/cart">
              <IonIcon icon={cartOutline}/>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent>
        <Link to={jwt
          ? "/profile"
          : "/auth"}>
          <IonItem>
            <IonAvatar slot="start">
              <IonIcon size='large' icon={personCircleOutline}/>
            </IonAvatar>
            <IonLabel>
              {renderUserInfo()}
            </IonLabel>
          </IonItem>
        </Link>
        <IonItem>Future content goes here</IonItem>
        {jwt && <IonButton expand='block' onClick={signOut}>Đăng xuất</IonButton>}
      </IonContent>
      <IonAlert
        isOpen={showAlert.isShow}
        onDidDismiss={() => setShowAlert({
        ...showAlert,
        isShow: false
      })}
        header={'Thông báo'}
        message={showAlert.message}
        buttons={['Đóng']}/>
    </IonPage>
  );
};

export default Profile;
