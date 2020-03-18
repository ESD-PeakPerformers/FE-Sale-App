import React from 'react'
import {IonButtons,
    IonButton,
    IonIcon} from '@ionic/react'
import {cartOutline} from 'ionicons/icons'
import {connect} from 'react-redux'
import {selectCartCount} from '../../redux/Cart/Cart.selector'

interface Props {
    count: number
}

interface Item{
    cateID: number, 
    cateName: string, 
    cateCode: string, 
    prodID: number, 
    prodCode: string, 
    prodName: string, 
    price: number, 
    image: string
}
interface State{
    cart: {
        count: number, 
        items: Item[]
    }
}

const Cart:React.FC<Props> = ({count}) => {
    return (
        <IonButtons slot='end'>
            <IonButton color="primary" href='/cart'>
            <IonIcon icon={cartOutline}/>
            <span className={count === 0 ? "d-none" : "Cart-count"}>{count}</span>
            </IonButton>
        </IonButtons>
    )
}

const mapStateToProps = (state:State) => ({
    count: selectCartCount(state)
  })

export default connect(mapStateToProps)(Cart)
