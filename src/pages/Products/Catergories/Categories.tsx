import React, {useState, useEffect} from 'react'
import {IonChip, IonLabel, IonContent} from '@ionic/react'
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
          <IonChip outline={true} color='primary'>
            <IonLabel color='secondary'>{item.cateName}</IonLabel>
          </IonChip>
        </Link>
      )
    })

  return (
    <div className='Products-Categories'>
      <h3>Danh mục sản phẩm</h3>
      {renderCategories}
    </div>
  )
}

export default Categories
