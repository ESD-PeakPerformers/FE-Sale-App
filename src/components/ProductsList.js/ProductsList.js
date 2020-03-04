import React from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonButton,
  IonLabel,
  IonContent,
  IonItemGroup,
  IonItem,
  IonThumbnail,
  IonImg,
  IonSelectOption,
  IonSelect,
  IonMenuButton
} from '@ionic/react'
import {optionsOutline} from 'ionicons/icons'
import SketonText from '../../components/SketonText/SketonText';
import LazyLoad from 'react-lazyload'
import SideMenu from './SideMenu/SideMenu';
import {addDot, getImage} from '../../shared/Method'
const ProductsList = ({data}) => {
  console.log(data)
  // Render products
  const renderItems = data
    ? (data.map(item => {
      return (
        <LazyLoad
          once={true}
          height={50}
          overflow
          throttle={300}
          placeholder={< SketonText />}>
          <IonItem
            href={"/products/" + item._source.cateName + "-" + item._source.prodCode + "-" + item._source.prodID}>
            <IonThumbnail className="Product-Thumbnail">
              <IonImg
                src={getImage(item._source.prodID, 0, "png")}
                alt={item._source.prodCode + '-images'}/>
            </IonThumbnail>
            <IonLabel style={{
              marginLeft: '1em'
            }}>
              <h4>{item._source.prodName}</h4>
              <p>{item._source.prodCode}</p>
              <p>{addDot(item._source.price)}
              </p>
            </IonLabel>
          </IonItem>
        </LazyLoad>
      )
    }))
    : (<SketonText/>)

  const customActionSheetOptions = {
    header: 'Sắp xếp theo:'
  };

  return (
    <React.Fragment>
      {/* Side menu */}
      <SideMenu/> {/* Page content */}
      <IonPage className="ProductList" id="mainContent" main>
        <IonHeader>
          {/* Toolbar  - For sorting and filtering */}
          <IonToolbar className="Sort-Filter">
            <IonButtons slot="start">
              <IonButton size='small'>
                <IonItem className="Sort-Select">
                  <IonLabel>Sắp xếp</IonLabel>
                  <IonSelect
                    interfaceOptions={customActionSheetOptions}
                    interface="action-sheet"
                    cancelText="Quay lại">
                    <IonSelectOption value="purple">Hàng mới</IonSelectOption>
                    <IonSelectOption value="yellow">Bán chạy</IonSelectOption>
                    <IonSelectOption value="orange">Giảm giá nhiều</IonSelectOption>
                    <IonSelectOption value="green">Giá thấp</IonSelectOption>
                    <IonSelectOption value="green">Giá cao</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonMenuButton>
                <IonIcon icon={optionsOutline}/>
              </IonMenuButton>

            </IonButtons>
          </IonToolbar>
        </IonHeader>

        {/* Content */}
        <IonContent>
          <IonItemGroup style={{
            width: '100%'
          }}>
            {renderItems}
          </IonItemGroup>
        </IonContent>
      </IonPage>
    </React.Fragment>
  )
}

export default ProductsList
