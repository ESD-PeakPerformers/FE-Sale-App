import React from 'react'
import {
  IonButton,
  IonToolbar,
  IonButtons,
  IonItemGroup,
} from '@ionic/react';
import ReactStarts from 'react-stars'
import {addDot} from '../../../../shared/Method'

const Description = ({data}) => {
    return (
      <div className="Product-Description">
        <div className="Product-Description-Header">
          <h2>{data.prodName}</h2>
          <p className="Product-Description-Price">{addDot(data.price)}</p>
          <ReactStarts
            style={{
            margin: '0 auto'
          }}
            value={4}
            count={5}
            size={16}
            color1={'#EDEDED'}
            color2={'#3880ff'}/>
          <IonButton block expand="block">Thêm vào giỏ hàng</IonButton>
          <IonButton block fill="outline" expand="block">Thanh toán</IonButton>
        </div>
  
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
              href={'/products/' + data.cateName + "/" + data.cateID}>
              {data.cateName}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </div>
    )
}

export default Description
