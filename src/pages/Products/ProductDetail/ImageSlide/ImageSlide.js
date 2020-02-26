import React from 'react'
import Img from '../../../../assets/img/ProductDetail@2x.png'
import {IonSlides,IonSlide,IonImg} from '@ionic/react'

const ImageSlide = () => {
    const slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true
  };
    return (
        <IonSlides options={slideOpts}>
            <IonSlide>
              <IonImg src={Img}></IonImg>
            </IonSlide>
          </IonSlides>
    )
}

export default ImageSlide
