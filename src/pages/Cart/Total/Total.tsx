import React from "react";
import { IonToolbar, IonItem } from "@ionic/react";
import {addDot} from '../../../shared/Method'

interface Props {
    cartItems: Item[]
}
interface Item{
    cateID: number, 
    cateName: string, 
    cateCode: string, 
    prodID: number, 
    prodCode: string, 
    prodName: string, 
    price: number, 
    image: string,
    quantity? : number
  }

const Total:React.FC<Props> = ({cartItems}) => {
    const total = cartItems.reduce((accumulator, current) => accumulator + current.price, 0 )
    const deliverFee = 0
    const finalPrice = total + deliverFee
  return (
    <IonToolbar className="Total">
      <h3>Tổng cộng</h3>
      <IonItem className="Total-Container">
        <div>
          <p>Tạm tính: {addDot(total)}</p>
          <p>Phí giao hàng: {addDot(deliverFee)}</p>
          <h3>Thành tiền: {addDot(finalPrice)} </h3>
        </div>
      </IonItem>
    </IonToolbar>
  );
};

export default Total;
