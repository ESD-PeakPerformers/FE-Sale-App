import React,{useState, useEffect} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid} from '@ionic/react';
import ProductListInCart from '../../components/ProductsList/ProductsListInCart'
import {connect} from 'react-redux'
import axios from 'axios'

const Cart = () => {  
  const [cartItems, setCartItems] = useState()
  console.log(cartItems)
  useEffect(()=>{
    axios.get(process.env.REACT_APP_BASE_URL + 'carts')
    .then(({data})=>{
      setCartItems(data)
    })
  },[])

  return (
    <IonPage>
      {/* <ProductListInCart cartItems={}/> */}
    </IonPage>
  );
};


export default Cart
