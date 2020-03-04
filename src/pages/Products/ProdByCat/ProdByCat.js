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
  IonMenuButton,

} from '@ionic/react'
import {cartOutline, optionsOutline} from 'ionicons/icons'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import SketonText from '../../../components/SketonText/SketonText';
import LazyLoad from 'react-lazyload'
import SideMenu from './SideMenu/SideMenu';
import {addDot, getImage} from '../../../shared/Method'

const ProdByCat = () => {
  const {category, cateID} = useParams()
  const [data,
    setData] = useState()
  const [optionSelected, setOptionSelected] = useState(null)
  const [result, setResult] = useState()

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
    ? (result && result.map(item => {
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
                <IonLabel style={{marginLeft: '1em'}}>
                  <h4>{item.prodName}</h4>
                  <p>{item.prodCode}</p>
                  <p>{addDot(item.price)} </p>
                </IonLabel>
            </IonItem>
          </LazyLoad>
      )
    }))
    : (<SketonText/>)

  const customActionSheetOptions = {
    header: 'Sắp xếp theo:'
  };
  const selectHandler = (e) => {
    setOptionSelected(e.target.value)
  }

  useEffect(()=> {
    console.log('useEffect run', optionSelected)
    if(!optionSelected && data){
      console.log('data ban dau')
      setResult(data)
    }else if (optionSelected === "price_low_to_high"){
      const sortResult = data.sort((a, b) => a.price - b.price)
      setResult(data)
    } else if (optionSelected === "price_high_to_low"){
      const sortResult = data.sort((a, b) => b.price - a.price)
      setResult(data)
    }
  }, [data, optionSelected])

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
                      cancelText="Quay lại"
                      onIonChange={selectHandler}
                      >
                      <IonSelectOption value="new_products">Hàng mới</IonSelectOption>
                      <IonSelectOption value="best_seller">Bán chạy</IonSelectOption>
                      <IonSelectOption value="best_discount">Giảm giá nhiều</IonSelectOption>
                      <IonSelectOption value="price_low_to_high">Giá thấp</IonSelectOption>
                      <IonSelectOption value="price_high_to_low">Giá cao</IonSelectOption>
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
