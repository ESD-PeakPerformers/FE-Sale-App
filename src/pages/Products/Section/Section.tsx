import React from 'react'
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonLabel,
  IonSlides,
  IonSlide,
  IonItem,
  IonThumbnail,
  IonItemGroup, 
  IonImg
} from '@ionic/react'
import {addDot,getImage} from '../../../shared/Method'

interface Product{
  date: string, 
  image: string, 
  rating: number
  cateID: number,
  price: number
  prodCode: string, 
  prodID: number
  prodName: string
}

interface Props{
  title: string, 
  link: string, 
  products: Product[]
}

const Section: React.FC<Props> = ({title, link, products}) => {
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true
  };
  const renderSlides = () => {
    for (let i = 0; i <= products.length; i += 3) {
      return (
        <IonSlide>
          <IonItemGroup style={{width: '100%'}}>
            {products
              .slice(i, i + 3)
              .map(item => {
                return (
                  <IonItem href={"/products/" + title + "-" + item.prodCode + "-" + item.prodID}>
                    <IonLabel>
                      <h4>{item.prodName}</h4>
                      <p>{item.prodCode}</p>
                      <p>{addDot(item.price)}</p>
                    </IonLabel>
                    <IonThumbnail className="Product-Thumbnail" slot="start">
                      <IonImg
                        src={getImage(item.prodID, 0, "png")} alt={item.prodCode + '-images'}/>
                    </IonThumbnail>
                    <IonButton fill="outline" color='medium' slot="end">Xem</IonButton>
                  </IonItem>
                )
              })}
          </IonItemGroup>
        </IonSlide>
      )
    }
  }

  return (
    <React.Fragment>
      <IonToolbar>
        <IonTitle slot='start'>{title}</IonTitle>
        <IonButtons slot='end'>
          <IonButton color="primary" href={link}>
            <IonLabel>Xem tất cả</IonLabel>
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <IonSlides options={slideOpts}>
        {renderSlides()}
      </IonSlides>
    </React.Fragment>
  )
}

export default Section
