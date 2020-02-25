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
  IonItemGroup
} from '@ionic/react'

const Section = ({title, link, products}) => {
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
                    </IonLabel>
                    <IonThumbnail slot="start">
                      <img
                        src={item.image} alt={item.prodCode + '-images'}/>
                    </IonThumbnail>
                    <IonButton fill="outline" color='medium' slot="end">{item.price}</IonButton>
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
