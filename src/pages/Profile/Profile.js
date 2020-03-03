import React,{useState} from 'react';
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
  IonAlert
} from '@ionic/react';
import {personCircleOutline} from 'ionicons/icons'
import {cartOutline} from 'ionicons/icons'
import {Link} from 'react-router-dom'
import {userInfo} from '../../shared/Method'
import axios from 'axios';
import Cookies from 'js-cookie'

const Profile = () => {
  const [showAlert, setShowAlert] = useState({
    isShow: false,
    message:''
  })

  const renderUserInfo = () => {
    if (userInfo) {
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

  const signOut = () => {
    axios.post(process.env.REACT_APP_BASE_URL + 'users/logout',{})
    .then(() => {
      Cookies.remove('jwt')
      setShowAlert({isShow:true, message:"Đăng xuất thành công"})
    })
    .catch(err => {
      setShowAlert({isShow:true, message: err.response.data})
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
        <Link to={userInfo ? "/profile" : "/auth"}>
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
        {userInfo && <IonButton expand='block' onClick={signOut}>Đăng xuất</IonButton>}
      </IonContent>
      <IonAlert
          isOpen={showAlert.isShow}
          onDidDismiss={() => setShowAlert({...showAlert, isShow: false})}
          header={'Thông báo'}
          message={showAlert.message}
          buttons={['Đóng']}
        />
    </IonPage>
  );
};

export default Profile;
