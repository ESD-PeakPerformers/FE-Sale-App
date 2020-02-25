import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButton,
  IonGrid,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonContent,
  IonLabel,
} from '@ionic/react';
import {cartOutline} from 'ionicons/icons'
import ImageSlide from './ImageSlide/ImageSlide'
import axios from 'axios';
import Description from './Description/Description'

const ProductDetail = () => {

  let {id} = useParams()

  const [data, setData] = useState()
  useEffect(()=>{
      axios.get(process.env.REACT_APP_BASE_URL + 'products/' + id)
      .then(({data})=>{
          setData(data)
      })
      .catch(err => console.log(err))
  },[])

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonGrid>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/products" color="primary"/>
              <IonLabel color="primary">Quay lại</IonLabel>
            </IonButtons>
            <IonButtons slot='end'>
              <IonButton color="primary">
                <IonIcon icon={cartOutline}/>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonGrid>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <ImageSlide/>
          {data && <Description data={data}/>}
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default ProductDetail
