import React, {useEffect, useState} from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonGrid,
  IonSearchbar,
  IonSpinner
} from '@ionic/react';
import {cartOutline} from 'ionicons/icons'
import Slide from './Slide/Slide'
import Section from './Section/Section'
import axios from 'axios';
import LazyLoad from 'react-lazyload'
import SketonText from '../../components/SketonText/SketonText';
import {useHistory} from 'react-router-dom'


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
interface Section{
  cateID: number,
  cateCode: string,
  cateName: string,
  products: Product[]
}


const Products = () => {
  const history = useHistory()
  const [data,
    setData] = useState<null | Section[]>()
  
  const searchBarRedirect = () => {
    console.log('clicked');
    history.push('/search')
  }

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
          link={"products/" + cat.cateName + "/" + cat.cateID}
          products={cat.products}/>
      </LazyLoad>
    )
  })):(<SketonText/>)

  return (
    <IonPage>
      <IonHeader className=" ion-no-border">
        <IonGrid>
          <IonToolbar>
            <IonTitle slot='start'>Trang chủ</IonTitle>
            <IonIcon style={{width: '24px', height:'24px'}} slot='end' color="primary" size='small' icon={cartOutline} />
          </IonToolbar>
        </IonGrid>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonSearchbar onIonFocus={searchBarRedirect} debounce={500} placeholder="Tìm kiếm sản phẩm..."></IonSearchbar>
          <Slide/> {renderSection}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Products;
