import React from 'react'
import {
  IonItem,
  IonToolbar,
  IonLabel,
  IonItemGroup,
  IonIcon,
  IonButtons,
  IonButton,
} from '@ionic/react'
import {homeOutline, checkmarkCircle} from 'ionicons/icons'
interface Props {}

const Address = (props: Props) => {
  return (
    <IonItemGroup className='Profile-Section'>
      <IonToolbar>
        <h3 slot='start'>Địa chỉ</h3>
        <IonButtons slot='end'>
          <IonButton color='primary' href={''}>
            <IonLabel>Chỉnh sửa</IonLabel>
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <IonItem lines='none' className='Profile-Address-Container'>
        <IonLabel className='Profile-Address-Container-Content'>
          <IonIcon color='primary' size='default' icon={homeOutline} />
          <p>192/14B Tôn Thất Thuyết</p>
          <IonIcon color='primary' size='default' icon={checkmarkCircle} />
        </IonLabel>
      </IonItem>
    </IonItemGroup>
  )
}

export default Address
