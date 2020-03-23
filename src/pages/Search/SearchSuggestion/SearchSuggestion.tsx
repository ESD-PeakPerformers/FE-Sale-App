import React from 'react'
import {IonItem, IonLabel, IonThumbnail, IonItemGroup} from '@ionic/react'
import {getImage} from '../../../shared/Method'

interface SearchResult {
  _index: string
  _type: string
  _id: string
  _score: number
  _source: Product
}

interface Product {
  date: string
  image: string
  rating: number
  cateID: number
  price: number
  prodCode: string
  prodID: number
  prodName: string
  cateName: string
}

interface Props {
  result: SearchResult[]
}

const SearchSuggestion: React.FC<Props> = ({result}) => {
  const renderSearchSuggestion =
    result &&
    result.map(item => {
      return (
        <IonItem
          href={
            '/products/' + item._source.prodCode + '-' + item._source.prodID
          }>
          <IonLabel>{item._source.prodName}</IonLabel>
          <IonThumbnail slot='start'>
            <img
              src={getImage(item._source.prodID, 0, 'png')}
              alt={item._source.prodName + '-image'}
            />
          </IonThumbnail>
        </IonItem>
      )
    })

  return <IonItemGroup>{renderSearchSuggestion}</IonItemGroup>
}

export default SearchSuggestion
