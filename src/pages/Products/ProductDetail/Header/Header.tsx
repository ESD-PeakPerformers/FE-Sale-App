import React from 'react'
import {IonHeader,
    IonGrid,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonLabel,
    } from '@ionic/react'
import Cart from '../../../../components/Cart/Cart'
import {connect} from 'react-redux'
import {selectCartCount} from '../../../../redux/Cart/Cart.selector'

interface State{
  cart: {
      count: number, 
      items: Item[]
  }
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

const Header:React.FC<{count: number}> = ({count}) => {
    return(
      <IonHeader className="ion-no-border">
      <IonGrid>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/products" color="primary"/>
            <IonLabel color="primary">Quay lại</IonLabel>
          </IonButtons>
          <Cart count={count}/>
        </IonToolbar>
      </IonGrid>
    </IonHeader>
    )
  }

const mapStateToProps = (state:State) => ({
  count: selectCartCount(state)
})
export default connect(mapStateToProps)(Header)
