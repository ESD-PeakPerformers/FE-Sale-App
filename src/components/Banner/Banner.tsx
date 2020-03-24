import React from 'react'
import {IonSlides, IonSlide} from '@ionic/react'
import Banner1 from '../../assets/img/Products-Banner@3x.png'
import Banner2 from '../../assets/img/Products-Banner2@3x.png'
import Banner3 from '../../assets/img/Products-Banner3@3x.png'

const Slide = () => {
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    slidesPerView: 1.3,
    spaceBetween: 10,
  }

  return (
    <IonSlides options={slideOpts}>
      <IonSlide>
        <img src={Banner1} alt='Banner1' />
      </IonSlide>
      <IonSlide>
        <img src={Banner2} alt='Banner2' />
      </IonSlide>
      <IonSlide>
        <img src={Banner3} alt='Banner3' />
      </IonSlide>
    </IonSlides>
  )
}

export default React.memo(Slide)
