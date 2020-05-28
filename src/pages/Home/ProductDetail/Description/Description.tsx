import React from 'react'
import {IonButton, IonToolbar, IonButtons, IonItemGroup} from '@ionic/react';
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
const Description  = ({products}:{products:Item}) => {
  return (
    <div className="Product-Description">

      <IonItemGroup className="Product-Description-Content">
        <h3>Thông tin chi tiết</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic.</p>
      </IonItemGroup>

      <IonToolbar className="Product-Description-Category">
        <h3 style={{
          display: "inline"
        }}>Danh mục</h3>
        <IonButtons slot='end'>
          <IonButton
            style={{
            margin: '0'
          }}
            fill='clear'
            color='primary'
            href={'/products/' + products.cateName + "/" + products.cateID}>
            {products.cateName}
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </div>
  )
}
export default Description
