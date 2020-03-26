import React, {useState, useEffect} from 'react'
import {
  IonChip,
  IonLabel,
  IonContent,
  IonButton,
  IonToolbar,
} from '@ionic/react'
import axios from 'axios'
import {Category} from '../../../shared/Products.model'
import {Link} from 'react-router-dom'

interface Props {}

const Categories = (props: Props) => {
  const [categories, setCategories] = useState<Category[]>()

  //Lấy data các danh mục sản phẩm từ backend
  useEffect(() => {
    axios.get(process.env.REACT_APP_BASE_URL + 'categories').then(({data}) => {
      setCategories(data)
    })
  }, [])
  const renderCategories =
    categories &&
    categories.map(item => {
      return (
        <Link to={'products/' + item.cateName + '/' + item.cateID}>
          <IonButton
            className='SearchTrend-Keyword'
            fill='outline'
            size='small'>
            {item.cateName}
          </IonButton>
        </Link>
      )
    })

  return (
    <React.Fragment>
      <h3 style={{paddingLeft: '10px'}}>Danh mục sản phẩm</h3>
      <div className='Products-Categories'>{renderCategories}</div>
    </React.Fragment>
  )
}

export default Categories
