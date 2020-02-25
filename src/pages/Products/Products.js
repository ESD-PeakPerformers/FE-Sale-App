import React, {useEffect, useState} from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonGrid,
  IonSearchbar,
  IonLoading,
  IonSpinner

} from '@ionic/react';
import Avatar from '../../assets/img/Avatar@2x.png'
import Slide from './Slide/Slide'
import Section from './Section/Section'
import axios from 'axios';
import LazyLoad from 'react-lazyload'
import SketonText from './SketonText/SketonText';

const Products = () => {
  console.log(process.env.REACT_APP_BASE_URL)
  const [data,
    setData] = useState()
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + 'products')
      .then(({data}) => {
        setData(data)
      })
      .catch(err => console.log(err))
  }, [])
  
  const renderSection = data ? (data.map(cat => {
    return (
      <LazyLoad
        once={true}
        height={50}
        overflow
        throttle={300}
        placeholder={<IonSpinner/>}>
        <Section
          title={cat.cateName}
          link={"products/" + cat.cateName}
          products={cat.products}/>
      </LazyLoad>
    )
  })):(<SketonText/>)

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonGrid>
          <IonToolbar>
            <IonTitle slot='start'>Trang chủ</IonTitle>
            <IonAvatar slot='end' className="Product-Avatar">
              <img src={Avatar} alt="avatar"/>
            </IonAvatar>
          </IonToolbar>
        </IonGrid>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonSearchbar debounce={500} placeholder="Tìm kiếm sản phẩm..."></IonSearchbar>
          <Slide/> {renderSection}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Products;
