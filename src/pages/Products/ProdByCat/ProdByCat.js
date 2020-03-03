import React, {useState, useEffect} from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonIcon,
  IonGrid,
  IonButtons,
  IonButton,
  IonLabel,
  IonTitle,
  IonContent,
  IonItemGroup,
  IonItem,
  IonThumbnail,
  IonImg,
  IonSelectOption,
  IonSelect,
  IonMenu,
  IonList,
  IonMenuButton,
  IonCol,
  IonRow
} from '@ionic/react'
import {cartOutline, chevronDownOutline, optionsOutline} from 'ionicons/icons'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import SketonText from '../../../components/SketonText/SketonText';
import LazyLoad from 'react-lazyload'
import SideMenu from './SideMenu/SideMenu';
const ProdByCat = () => {
  const {category, cateID} = useParams()
  const [data,
    setData] = useState()
  const [expand,
    setExpand] = useState(true)

  // Fetch data
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + 'products/category/' + cateID)
      .then(({data}) => {
        setData(data)
      })
  }, [])

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
              href={"/products/" + item.cateName + "-" + item.prodCode + "-" + item.prodID}>
                <IonThumbnail className="Product-Thumbnail">
                  <IonImg src={item.image + 's0.png'} alt={item.prodCode + '-images'}/>
                </IonThumbnail>
                <IonLabel style={{marginLeft: '1em'}}>
                  <h4>{item.prodName}</h4>
                  <p>{item.prodCode}</p>
                  <p>{item.price + "đ"} </p>
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
      <IonPage id="mainContent" main>
        <IonHeader>
          <IonGrid>
            {/* Toolbar 1 - For navigator */}
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton defaultHref="/products" color="primary"/>
                <IonLabel color="primary">Quay lại</IonLabel>
              </IonButtons>
              <IonButtons slot='end'>
                <IonButton color="primary">
                  <IonIcon icon={cartOutline}/>
                </IonButton>
              </IonButtons>
            </IonToolbar>

            {/* Toolbar 2 - For sorting and filtering */}
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

          </IonGrid>
        </IonHeader>

        {/* Content */}
        <IonContent>
          <IonHeader className="ion-no-border">
            <IonToolbar>
              <IonTitle size="large">{category}</IonTitle>
            </IonToolbar>
          </IonHeader>
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

export default ProdByCat
