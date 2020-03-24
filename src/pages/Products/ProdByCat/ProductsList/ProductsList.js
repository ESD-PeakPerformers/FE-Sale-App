import React from 'react'
import {IonItem, IonThumbnail, IonImg, IonLabel} from '@ionic/react'
import LazyLoad from 'react-lazyload'
import {addDot, getImage} from '../../../../shared/Method'
import SketonText from '../../../../components/SketonText/SketonText'

const ProductsList = ({result}) => {
  //Map qua list products và in ra từng item
  const renderItems = result ? (
    result.map(item => {
      return (
        <LazyLoad once={true} height={50} overflow throttle={300}>
          <IonItem
            href={
              '/products/' +
              item.cateName +
              '-' +
              item.prodCode +
              '-' +
              item.prodID
            }>
            <IonThumbnail className='Product-Thumbnail'>
              <IonImg
                src={getImage('products', item.prodID, 0, 'png')}
                alt={item.prodCode + '-images'}
              />
            </IonThumbnail>
            <IonLabel
              style={{
                marginLeft: '1em',
              }}>
              <h4>{item.prodName}</h4>
              <p>{item.prodCode}</p>
              <p>{addDot(item.price)}</p>
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
