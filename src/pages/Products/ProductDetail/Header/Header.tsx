import React from 'react'
import {IonHeader,
    IonGrid,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonLabel,
    } from '@ionic/react'
import Cart from '../../../../components/Cart/Cart'

const Header= () => {
    return(
      <IonHeader className="ion-no-border">
      <IonGrid>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/products" color="primary"/>
            <IonLabel color="primary">Quay lại</IonLabel>
          </IonButtons>
          <Cart/>
        </IonToolbar>
      </IonGrid>
    </IonHeader>
    )
  }


export default Header
