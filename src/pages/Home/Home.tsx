import React, { useEffect, useState } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonSearchbar,
  IonSpinner,
} from '@ionic/react'
import Section from './Section/Section'
import axios from 'axios'
import LazyLoad from 'react-lazyload'
import SketonText from '../../components/SketonText/SketonText'
import { useHistory } from 'react-router-dom'
import { Product } from '../shared/types'
import translate from '../../i18n/Translate'
import { useIntl } from 'react-intl'
interface Section {
  cateID: number
  cateCode: string
  cateName: string
  products: Product[]
}

const Products = () => {
  const history = useHistory()
  const [data, setData] = useState<null | Section[]>()
  const intl = useIntl()

  //Khi ấn vào thanh search tự động điều hướng qua tab Search
  const searchBarRedirect = () => {
    console.log('clicked')
    history.push('/search')
  }

  //Fetch tất cả các sản phẩm theo danh mục từ backend
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + 'products')
      .then(({ data }) => {
        setData(data)
      })
      .catch(err => console.log(err))
  }, [])

  //In ra các danh mục và sản phẩm tiêu biểu
  const renderSection = data ? (
    //Nếu đã fetch được data => in ra danh mục
    data.map(cat => {
      return (
        <LazyLoad
          once={true}
          height={50}
          overflow
          throttle={300}
          placeholder={<IonSpinner />}>
          <Section
            title={cat.cateName}
            link={'products/' + cat.cateName + '/' + cat.cateID}
            products={cat.products}
          />
        </LazyLoad>
      )
    })
  ) : (
    //Nếu chưa fetch được thì in ra Sketon text
    <SketonText />
  )

  return (
    <IonPage>
      <IonHeader className='ion-no-border' translucent={true}>
        <IonGrid>
          <IonToolbar>
            <IonTitle slot='start'>{translate('Home')}</IonTitle>
          </IonToolbar>
        </IonGrid>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonSearchbar
            onIonFocus={searchBarRedirect}
            debounce={500}
            placeholder={intl.formatMessage({
              id: 'Search for products',
            })}></IonSearchbar>
          {renderSection}
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Products
