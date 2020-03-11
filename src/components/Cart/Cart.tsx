import React from 'react'
import {IonButtons,
    IonButton,
    IonIcon} from '@ionic/react'
import {cartOutline} from 'ionicons/icons'

interface Props {
    count: number
}

const Cart:React.FC<Props> = ({count}) => {
    return (
        <IonButtons slot='end'>
            <IonButton color="primary">
            <IonIcon icon={cartOutline}/>
            <span className={count === 0 ? "d-none" : "Cart-count"}>{count}</span>
            </IonButton>
        </IonButtons>
    )
}

export default Cart
