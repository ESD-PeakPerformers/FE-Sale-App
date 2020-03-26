import React, {useState} from 'react'
import {
  IonButton,
  IonTitle,
  IonItem,
  IonList,
  IonLabel,
  IonToolbar,
  IonButtons,
  IonHeader,
  IonIcon,
  IonPopover,
} from '@ionic/react'
import {
  chevronBackOutline,
  ellipsisVerticalOutline,
  addCircleOutline,
} from 'ionicons/icons'
import {useIntl} from 'react-intl'
import translate from '../../../../i18n/Translate'

interface Props {
  toggleModal: (status: boolean) => void
}

const ShowAllAddress: React.FC<Props> = ({toggleModal}) => {
  const intl = useIntl()
  const [showPopover, setShowPopover] = useState<{
    open: boolean
    event: any
  }>({
    open: false,
    event: null,
  })
  return (
    <div className='ShowAllAddress'>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonButton
              className='Button-Back'
              onClick={() => toggleModal(false)}>
              <IonIcon icon={chevronBackOutline} color='primary' />
            </IonButton>
          </IonButtons>
          <IonTitle>{translate('Delivery address')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonList>
        <IonItem lines='full'>
          <IonLabel className='ShowAllAddress-Label'>
            <h3>Pham Duc Minh</h3>
            <p>195/14 Ton That Thuyet, Phuong 3, Quan 4, TP. Ho Chi Minh</p>
            <p>0865573597</p>
            <span>{translate('Default address')}</span>
            <IonPopover
              isOpen={showPopover.open}
              onDidDismiss={() => setShowPopover({...showPopover, open: false})}
              event={showPopover.event}>
              <IonButtons className='ShowAllAddress-DropdownButtons'>
                <IonButton>{translate('Set as default')}</IonButton>
                <IonButton>{translate('Edit')}</IonButton>
                <IonButton>{translate('Delete')}</IonButton>
              </IonButtons>
            </IonPopover>
          </IonLabel>
          <IonButtons>
            <IonButton
              onClick={e => setShowPopover({event: e.nativeEvent, open: true})}>
              <IonIcon icon={ellipsisVerticalOutline} />
            </IonButton>
          </IonButtons>
        </IonItem>
      </IonList>
      <IonButtons>
        <IonButton id='Button-AddAddress' expand='block' color='primary'>
          <IonIcon icon={addCircleOutline} color='primary' />
          {translate('Add a new deliver address')}
        </IonButton>
      </IonButtons>
      <IonButton
        className='Button__FloatBottom'
        expand='block'
        onClick={() => toggleModal(false)}>
        {translate('Save changes')}
      </IonButton>
    </div>
  )
}

export default ShowAllAddress
