import React from 'react'
import {IonSlides,IonSlide,IonImg} from '@ionic/react'
import {getImage} from '../../../../shared/Method'

const ImageSlide = ({prodID}:{prodID:number}) => {
    const slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true
  };
  console.log(prodID)
    return (
        <IonSlides options={slideOpts}>
            <IonSlide>
              <IonImg src={getImage(prodID, 1, "png")}></IonImg>
            </IonSlide>
          </IonSlides>
    )
}

export default ImageSlide
