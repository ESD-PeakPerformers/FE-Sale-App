import React, {useState, useEffect} from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonIcon,
  IonGrid,
  IonButtons,
  IonButton,
  IonLabel,
  IonTitle,
  IonContent,
  IonItemGroup,
  IonItem,
  IonThumbnail,
  IonImg
} from '@ionic/react'
import {cartOutline} from 'ionicons/icons'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import SketonText from '../../../components/SketonText/SketonText';
import LazyLoad from 'react-lazyload'
const ProdByCat = () => {
  const {category, cateID} = useParams()
  const [data,
    setData] = useState()

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + 'products/category/' + cateID)
      .then(({data}) => {
        setData(data)
      })
  }, [])
  const renderItems = data
    ? (data.map(item => {
      return (
        <LazyLoad
          once={true}
          height={50}
          overflow
          throttle={300}
          placeholder={<SketonText/>}>
          <IonItem
            href={"/products/" + item.catName + "-" + item.prodCode + "-" + item.prodID}>
            <IonLabel>
              <h4>{item.prodName}</h4>
              <p>{item.prodCode}</p>
            </IonLabel>
            <IonThumbnail className="Product-Thumbnail" slot="start">
              <IonImg src={item.image} alt={item.prodCode + '-images'}/>
            </IonThumbnail>
            <IonButton fill="outline" color='medium' slot="end">{item.price}</IonButton>
          </IonItem>
        </LazyLoad>
      )
    }))
    : (<SketonText/>)

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
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonTitle size="large">{category}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItemGroup style={{
          width: '100%'
        }}>
          {renderItems}
        </IonItemGroup>
      </IonContent>
    </IonPage>
  )
}

export default ProdByCat
