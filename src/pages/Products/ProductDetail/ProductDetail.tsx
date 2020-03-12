import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {
  IonPage,
  IonGrid,
  IonContent,
} from '@ionic/react';
import ImageSlide from './ImageSlide/ImageSlide'
import axios from 'axios';
import Description from './Description/Description'
import Rating from './Rating/Rating'
import Header from './Header/Header'
import Action from './Action/Action';

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
const ProductDetail = () => {
  const [product,
    setProduct] = useState()
  //Lấy productID từ params của url 
  let {id} = useParams()

  //Lấy thông tin sản phẩm từ backend
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + 'products/' + id)
      .then(({data}) => {
        setProduct(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <IonPage>
      <Header/>
      <IonContent>
        <IonGrid>
          {product && (
            <React.Fragment>
            <ImageSlide prodID={product.prodID}/>  
            <Action product={product}/>
            <Description products={product}/>
            </React.Fragment>
          )}
          <Rating/>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
  
}


export default ProductDetail
