import React from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonGrid,
  IonBackButton,
  IonLabel,
  IonButtons,
  IonButton,
} from '@ionic/react'
import { Product } from '../shared/types'

interface State {
  count: number
  products: Product[]
}

const Cart = () => {
  return (
    <IonPage>
      <IonHeader className='ion-no-border' translucent={true}>
        <IonGrid>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonBackButton defaultHref='/products' color='primary' />
              <IonLabel color='primary'>Quay lại</IonLabel>
            </IonButtons>
          </IonToolbar>
        </IonGrid>
      </IonHeader>
      <IonContent>
        <IonGrid></IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Cart
