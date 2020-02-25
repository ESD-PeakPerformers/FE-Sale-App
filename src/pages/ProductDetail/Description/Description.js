import React from 'react'
import {IonButton} from '@ionic/react';

const Description = ({data}) => {
  console.log(data);
  return (
    <div className="Product-Description">
      <h2>{data.prodName}</h2>
      <p>{data.price + 'đ'}
      </p>
      <p>Rating gonna go here</p>
      <IonButton block expand="block">Thêm vào giỏ hàng</IonButton>
      <IonButton block fill="outline" expand="block">Thanh toán</IonButton>
      
      <div className="Product-Description-Content">
        <h3>Thông tin chi tiết</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic.</p>
      </div>
    </div>
  )
}

export default Description
