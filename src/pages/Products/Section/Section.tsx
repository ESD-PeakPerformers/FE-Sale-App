import React from 'react'
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonLabel,
  IonItem,
  IonThumbnail,
  IonItemGroup,
  IonImg,
} from '@ionic/react'
import {addDot, getImage} from '../../../shared/Method'
import {Product} from '../../../shared/Products.model'

interface Props {
  title: string
  link: string
  products: Product[]
}

//Render danh mục sản phẩm và một số sản phẩm tiêu biểu ở trang products
const Section: React.FC<Props> = ({title, link, products}) => {
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
  }
  const renderSectionContent = () => {
    return (
      <IonItemGroup style={{width: '100%'}}>
        {products.slice(0, 3).map(item => {
          const productUrl =
            '/products/' + title + '-' + item.prodCode + '-' + item.prodID
          return (
            <IonItem href={productUrl}>
              <div className='Section-Content'>
                <h4>{item.prodName}</h4>
                <p>{item.prodCode}</p>
                <p>{addDot(item.price)}</p>
              </div>
              <IonThumbnail className='Product-Thumbnail' slot='start'>
                <IonImg
                  src={getImage('products', item.prodID, 0, 'png')}
                  alt={item.prodCode + '-images'}
                />
              </IonThumbnail>
              <IonButton
                className='Button-SeeMore'
                fill='solid'
                shape='round'
                slot='end'>
                Xem
              </IonButton>
            </IonItem>
          )
        })}
      </IonItemGroup>
    )
  }

  return (
    <div className='Section'>
      <IonToolbar className='Section-Header'>
        <h3 slot='start'>{title}</h3>
        <IonButtons slot='end'>
          <IonButton color='primary' href={link}>
            <IonLabel>Xem tất cả</IonLabel>
          </IonButton>
        </IonButtons>
      </IonToolbar>
      {renderSectionContent()}
    </div>
  )
}

export default Section
