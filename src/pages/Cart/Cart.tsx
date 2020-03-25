import React, {useState, useEffect} from 'react'
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
import ProductListInCart from '../../components/ProductsList/ProductsListInCart'
import axios from 'axios'
import Cookies from 'js-cookie'
import jwt from 'jwt-simple'
import DeliverAddress from './DeliverAddress/DeliverAddress'
import Payment from './Payment/Payment'
import Total from './Total/Total'
import {Product} from '../../shared/Products.model'

interface State {
  count: number
  products: Product[]
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<State>()
  console.log(cartItems)

  useEffect(() => {
    if (Cookies.get('jwt')) {
      axios.get(process.env.REACT_APP_BASE_URL + 'carts').then(({data}) => {
        setCartItems(data)
      })
    } else if (Cookies.get('CART')) {
      const data = jwt.decode(Cookies.get('CART')!, 'xxx')
      setCartItems(data)
    } else {
      setCartItems(prev => ({count: 0, products: []}))
    }
  }, [])

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
        <IonGrid>
          {cartItems ? (
            <React.Fragment>
              <ProductListInCart cartItems={cartItems.products} />
              <DeliverAddress />
              <Payment />
              <Total cartItems={cartItems.products} />
              <IonButton className='Cart-PayButton' fill='solid' expand='block'>
                Thanh toán
              </IonButton>
            </React.Fragment>
          ) : null}
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Cart
