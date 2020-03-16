import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonGrid,
  IonBackButton,
  IonLabel,
  IonButtons,
  IonButton
} from "@ionic/react";
import ProductListInCart from "../../components/ProductsList/ProductsListInCart";
import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jwt-simple";
import DeliverAddress from "./DeliverAddress/DeliverAddress";
import Payment from "./Payment/Payment";
import Total from "./Total/Total";

interface Item {
  cateID: number;
  cateName: string;
  cateCode: string;
  prodID: number;
  prodCode: string;
  prodName: string;
  price: number;
  image: string;
  quantity?: number;
}

interface State {
  count: number;
  products: Item[];
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<State>();
  console.log(cartItems);

  useEffect(() => {
    if (Cookies.get("jwt")) {
      axios.get(process.env.REACT_APP_BASE_URL + "carts").then(({ data }) => {
        setCartItems(data);
      });
    } else if (Cookies.get("CART")) {
      const data = jwt.decode(Cookies.get("CART")!, "xxx");
      setCartItems(data);
    } else {
      setCartItems(prev => ({ count: 0, products: [] }));
    }
  }, []);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonGrid>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/products" color="primary" />
              <IonLabel color="primary">Quay lại</IonLabel>
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
            </React.Fragment>
          ) : null}
          <IonButton className="Cart-PayButton" fill='solid' expand='block'>Thanh toán</IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
