import React from 'react'
import {IonSlides, IonSlide} from '@ionic/react'
import Banner1 from '../../../assets/img/Products-Banner@3x.png'

const Slide = () => {
  const slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  return (
    <IonSlides options={slideOpts}>
      <IonSlide>
        <img src={Banner1} alt="Banner1"/>
      </IonSlide>
      <IonSlide>
        <h1>Slide 2</h1>
      </IonSlide>
      <IonSlide>
        <h1>Slide 3</h1>
      </IonSlide>
    </IonSlides>
  )
}

export default Slide
