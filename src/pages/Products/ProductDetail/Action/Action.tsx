import React,{useState} from 'react'
import ReactStarts from 'react-stars'
import {addDot} from '../../../../shared/Method'
import {IonButton, IonIcon} from '@ionic/react'
import {add, remove} from 'ionicons/icons'
import {connect} from 'react-redux'
import {selectCartCount} from '../../../../redux/Cart/Cart.selector'
import {addItemToCart} from '../../../../redux/Cart/Cart.actions'

import { Dispatch } from 'redux';
import axios from 'axios';
interface State{
  cart: {
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
interface Props {
    product: Item,
    addItemToCard: (count:number) => void
}

const Action:React.FC<Props> = ({product, addItemToCard}) => {
  const [quantity, setQuantity] = useState(1)
  const decreaseHandler = () => {
    if(quantity > 0){
      setQuantity(prev => prev - 1)
    }
  }
  const increaseHandler = () => {
    setQuantity(prev => prev + 1)
  }
  const onAddToCart = () => {
    addItemToCard(quantity)
    const body = {
      quantity: quantity,
      prodID: product.prodID
    }
    axios.post(process.env.REACT_APP_BASE_URL + 'carts/add')
    .then(()=>console.log('add item to cart'))
    .catch(err=>console.log(err))
  }
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
        <div className="ProductDetail-Action-ProductCount">
          <span>Số lượng:</span>
          <p>{quantity + " sản phẩm"}</p>
          <IonButton size='small' fill='outline' onClick={decreaseHandler}>
            <IonIcon icon={remove} />
          </IonButton>
          <IonButton size='small' fill='outline' onClick={increaseHandler}>
            <IonIcon icon={add} />
          </IonButton>
        </div>
        <IonButton expand="block" onClick={onAddToCart}>Thêm vào giỏ hàng</IonButton>
        <IonButton  fill="outline" expand="block" href="/cart">Xem giỏ hàng</IonButton>
      </div>
    )
}
const mapStateToProps = (state:State) => ({
  count: selectCartCount(state)
})

const mapDispatchToProps = (dispatch:Dispatch) => ({
  addItemToCard: (count:number) => dispatch(addItemToCart(count))
})

export default connect(mapStateToProps,mapDispatchToProps)(Action)
