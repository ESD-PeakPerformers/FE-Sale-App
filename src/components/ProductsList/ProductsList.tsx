import React from 'react'
import {IonItem, IonThumbnail, IonImg, IonLabel} from '@ionic/react'
import LazyLoad from 'react-lazyload'
import SketonText from '../SketonText/SketonText'
import {addDot, getImage} from '../../shared/Method'
interface Props {
  data: SearchResult[]
}
interface Product {
  date: string
  image: string
  rating: number
  cateID: number
  price: number
  prodCode: string
  prodID: number
  prodName: string
  cateName: string
}

interface SearchResult {
  _index: string
  _type: string
  _id: string
  _score: number
  _source: Product
}
const ProductsList: React.FC<Props> = ({data}) => {
  const renderItems = data ? (
    data.map(item => {
      return (
        <LazyLoad
          once={true}
          height={50}
          overflow
          throttle={300}
          placeholder={<SketonText />}>
          <IonItem
            href={
              '/products/' +
              item._source.cateName +
              '-' +
              item._source.prodCode +
              '-' +
              item._source.prodID
            }>
            <IonThumbnail className='Product-Thumbnail'>
              <IonImg
                src={getImage('products', item._source.prodID, 0, 'png')}
                alt={item._source.prodCode + '-images'}
              />
            </IonThumbnail>
            <IonLabel
              style={{
                marginLeft: '1em',
              }}>
              <h4>{item._source.prodName}</h4>
              <p>{item._source.prodCode}</p>
              <p>{addDot(item._source.price)}</p>
            </IonLabel>
          </IonItem>
        </LazyLoad>
      )
    })
  ) : (
    <SketonText />
  )
  return <React.Fragment>{renderItems}</React.Fragment>
}

export default ProductsList
