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
  IonItemGroup
} from '@ionic/react'
import {cartOutline} from 'ionicons/icons'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import SideMenu from './Filter/SideMenu/SideMenu';
import Filter from './Filter/Filter'
import ProductsList from './ProductsList/ProductsList'

const ProdByCat = () => {
  const {category, cateID} = useParams()
  const [data,
    setData] = useState()
  const [optionSelected,
    setOptionSelected] = useState(null)
  const [result,
    setResult] = useState()

  // Fetch data
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + 'products/category/' + cateID)
      .then(({data}) => {
        setData(data)
      })
  }, [])

  const selectHandler = (e) => {
    setOptionSelected(e.target.value)
  }

  useEffect(() => {
    if (!optionSelected && data) {
      setResult(data)
    } else if (optionSelected === "price_low_to_high") {
      const sortResult = data.sort((a, b) => a.price - b.price)
      setResult([...sortResult])
    } else if (optionSelected === "price_high_to_low") {
      const sortResult = data.sort((a, b) => b.price - a.price)
      setResult([...sortResult])
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
            <Filter selectHandler={selectHandler}/>
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
            <ProductsList result={result}/>
          </IonItemGroup>
        </IonContent>
      </IonPage>
    </React.Fragment>
  )
}

export default ProdByCat
