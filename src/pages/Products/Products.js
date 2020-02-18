import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonButtons,
  IonButton,
  IonGrid,
  IonSearchbar,

} from '@ionic/react';
import Avatar from '../../assets/img/Avatar@2x.png'
import Slide from './Slide/Slide'
import Section from './Section/Section'
import sampleData from './SampleData';
const Products = () => {

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
          <Slide/>
          <Section title={"Sản phẩm bán chạy"} products={sampleData.products} link={sampleData.link}/>
          <Section title={"Sản phầm khuyến mãi"} products={sampleData.products} link={sampleData.link}/>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Products;
