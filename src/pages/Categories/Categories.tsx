import React, {useState, useEffect} from 'react'
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
import {Category} from '../../shared/Products.model'
import {getImage} from '../../shared/Method'
import {Link} from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
const Categories = () => {
  const [categories, setCategories] = useState<Category[]>()

  useEffect(() => {
    axios.get(process.env.REACT_APP_BASE_URL + 'categories').then(({data}) => {
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
      <IonHeader>
        <IonToolbar>
          <IonTitle>Categories</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className='Categories'>
          <Banner />
          {renderCategories}
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Categories
