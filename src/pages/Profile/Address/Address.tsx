import React, {useState} from 'react'
import {
  IonItem,
  IonToolbar,
  IonLabel,
  IonItemGroup,
  IonIcon,
  IonButtons,
  IonButton,
  IonModal,
} from '@ionic/react'
import {homeOutline, checkmarkCircle, toggle} from 'ionicons/icons'
import translate from '../../../i18n/Translate'
import ShowAllAddress from './ShowAllAddress/ShowAllAddress'

interface Props {}

const Address = (props: Props) => {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = (status: boolean) => {
    setShowModal(status)
  }
  return (
    <IonItemGroup className='Profile-Section'>
      <IonToolbar>
        <h3 slot='start'>{translate('Address')}</h3>
        <IonButtons slot='end'>
          <IonButton color='primary'>
            <IonLabel onClick={() => toggleModal(true)}>
              {translate('Edit')}
            </IonLabel>
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
      <IonModal isOpen={showModal}>
        <ShowAllAddress toggleModal={toggleModal} />
      </IonModal>
    </IonItemGroup>
  )
}

export default Address
