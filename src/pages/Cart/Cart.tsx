import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid} from '@ionic/react';
import ProductListInCart from '../../components/ProductsList/ProductsListInCart'
import {connect} from 'react-redux'


interface State{
  cart: Cart
}
interface Cart{
    count: number, 
    items: Item[]
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

const Cart = ({cart}:{cart:Cart}) => {  
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Giỏ hàng của tôi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <ProductListInCart cartItems={cart}/>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state:State) => ({
  cart: state.cart
})
export default connect(mapStateToProps)(Cart)
