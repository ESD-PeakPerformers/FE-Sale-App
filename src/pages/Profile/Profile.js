import React from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonItem, IonLabel, IonButton, IonIcon,IonButtons} from '@ionic/react';
import Avatar from '../../assets/img/Avatar@2x.png'
import {cartOutline} from 'ionicons/icons'
import {Link} from 'react-router-dom'

const Profile = () => {
  return (
    <IonPage>
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
      <IonContent>
        <Link to="/auth">
          <IonItem>
            <IonAvatar slot="start">
              <img alt='avatar' src={Avatar}/>
            </IonAvatar>
            <IonLabel>
              <h3>Chào mừng bạn đến với DIK.</h3>
              <p>Đăng nhập / Đăng ký </p>
            </IonLabel>
          </IonItem>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
