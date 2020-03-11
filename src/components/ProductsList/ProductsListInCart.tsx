import React from 'react'
import {IonItem, IonThumbnail, IonImg, IonLabel} from '@ionic/react'
import LazyLoad from 'react-lazyload'
import SketonText from '../SketonText/SketonText'
import {addDot, getImage} from '../../shared/Method'
interface Props{
  cartItems: {
    count: number, 
    items: Item[]
  }
}
interface Item{
  cateID: number, 
  cateName: string, 
  cateCode: string, 
  prodID: number, 
  prodCode: string, 
  prodName: string, 
  price: number, 
  image: string
}

const ProductsList: React.FC<Props> = ({cartItems}) => {
  const renderItems = cartItems
    ? (cartItems.items.map(item => {
      return (
        <LazyLoad
          once={true}
          height={50}
          overflow
          throttle={300}
          placeholder={< SketonText />}>
          <IonItem
            href={"/products/" + item.cateName + "-" + item.prodCode + "-" + item.prodID}>
            <IonThumbnail className="Product-Thumbnail">
              <IonImg src={getImage(item.prodID, 0, "png")} alt={item.prodCode + '-images'}/>
            </IonThumbnail>
            <IonLabel style={{
              marginLeft: '1em'
            }}>
              <h4>{item.prodName}</h4>
              <p>{item.prodCode}</p>
              <p>{addDot(item.price)}
              </p>
            </IonLabel>
          </IonItem>
        </LazyLoad>
      )
    }))
    : (<SketonText/>)
  return (
    <React.Fragment>
      {renderItems}
    </React.Fragment>
  )
}

export default ProductsList
