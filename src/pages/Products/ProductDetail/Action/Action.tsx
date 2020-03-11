import React from 'react'
import ReactStarts from 'react-stars'
import {addDot} from '../../../../shared/Method'
import {IonButton} from '@ionic/react'
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
interface Props {
    product: Item,
    addItemToCard: (products:Item) => void
}

const Action:React.FC<Props> = ({product, addItemToCard}) => {
    return (
        <div className="Product-Description-Header">
        <h2>{product.prodName}</h2>
        <p className="Product-Description-Price">{addDot(product.price)}</p>
        <ReactStarts
          value={4}
          count={5}
          size={16}
          color1={'#EDEDED'}
          color2={'#3880ff'}/>
        <IonButton onClick={() => addItemToCard(product)} expand="block">Thêm vào giỏ hàng</IonButton>
        <IonButton  fill="outline" expand="block">Xem giỏ hàng</IonButton>
      </div>
    )
}

export default Action
