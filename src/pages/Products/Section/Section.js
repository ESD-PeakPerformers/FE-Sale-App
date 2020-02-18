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
    speed: 400
  };
  return (
    <React.Fragment>

      <IonToolbar>
        <IonTitle slot='start'>{title}</IonTitle>
        <IonButtons slot='end'>
          <IonButton color="light" href={link}>
            <IonLabel>
              Xem thêm
            </IonLabel>
          </IonButton>
        </IonButtons>
      </IonToolbar>

      <IonSlides options={slideOpts}>
        <IonSlide>
          <IonItemGroup>
            <IonItem href="#">
              <IonLabel>
                Thumbnail End, Anchor Item
              </IonLabel>
              <IonThumbnail slot="end">
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
              </IonThumbnail>
            </IonItem>
            <IonItem href="#">
              <IonLabel>
                Thumbnail End, Anchor Item
              </IonLabel>
              <IonThumbnail slot="end">
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
              </IonThumbnail>
            </IonItem>
            <IonItem href="#">
              <IonLabel>
                Thumbnail End, Anchor Item
              </IonLabel>
              <IonThumbnail slot="end">
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
              </IonThumbnail>
            </IonItem>
          </IonItemGroup>

        </IonSlide>
        <IonSlide>
          <IonItemGroup>
            <IonItem href="#">
              <IonLabel>
                Thumbnail End, Anchor Item
              </IonLabel>
              <IonThumbnail slot="end">
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
              </IonThumbnail>
            </IonItem>
            <IonItem href="#">
              <IonLabel>
                Thumbnail End, Anchor Item
              </IonLabel>
              <IonThumbnail slot="end">
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
              </IonThumbnail>
            </IonItem>
            <IonItem href="#">
              <IonLabel>
                Thumbnail End, Anchor Item
              </IonLabel>
              <IonThumbnail slot="end">
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
              </IonThumbnail>
            </IonItem>
          </IonItemGroup>

        </IonSlide>
      </IonSlides>
    </React.Fragment>
  )
}

export default Section
