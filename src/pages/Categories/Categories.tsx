import React, { useState, useEffect } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonThumbnail,
} from '@ionic/react'
import axios from 'axios'
import { Category } from '../shared/types'
import { getImage } from '../../shared/Method'
import { Link } from 'react-router-dom'
import Translate from '../../i18n/Translate'
const Categories = () => {
  const [categories, setCategories] = useState<Category[]>()
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + 'categories')
      .then(({ data }) => {
        setCategories(data)
      })
  }, [])

  const renderCategories =
    categories &&
    categories.map(cat => {
      const imageUrl = getImage('categories', cat.cateID, 0, 'png')
      const catUrl = '/products/' + cat.cateName + '/' + cat.cateID
      return (
        <Link to={catUrl} className='Categories-Container'>
          <IonThumbnail className='Categories-Thumbnail'>
            <img src={imageUrl} alt={cat.cateName + ' thumbnail'} />
          </IonThumbnail>
          <span>{cat.cateName}</span>
        </Link>
      )
    })
  return (
    <IonPage>
      <IonHeader className='ion-no-border' translucent={true}>
        <IonToolbar>
          <IonTitle>{Translate('Categories')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h3 style={{ marginLeft: '20px', marginTop: '2em' }}>
          {Translate('Trending')}
        </h3>
        <IonGrid className='Categories'>{renderCategories}</IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Categories
