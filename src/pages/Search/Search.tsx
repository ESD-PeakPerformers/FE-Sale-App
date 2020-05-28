import React, { useEffect, useState, FormEvent } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonSearchbar,
} from '@ionic/react'
import SearchTrend from './SearchTrend/SearchTrend'
import SearchHistory from './SearchHistory/SearchHistory'
import { axiosNoAuth } from '../../index'
import ProductsList from '../../components/ProductsList/ProductsList'
import { SearchbarChangeEventDetail } from '@ionic/core'
import SearchSuggestion from './SearchSuggestion/SearchSuggestion'
import { Product } from '../shared/types'
import { SearchResult } from './types'

const Search = () => {
  const [input, setInput] = useState()
  const [result, setResult] = useState<SearchResult[]>([])
  const [searchFinish, setSearchFinish] = useState(false)

  const changeHandler = (e: CustomEvent<SearchbarChangeEventDetail>) => {
    setInput((e.target as HTMLInputElement).value)
  }

  const searchSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchFinish(true)
  }

  //Gửi keyword và nhận về kết quả từ Elastic Search
  useEffect(() => {
    const options = {
      query: {
        match: {
          prodName: input,
        },
      },
    }
    axiosNoAuth
      .post(process.env.REACT_APP_ELASTIC_SEARCH + 'products/_search', options)
      .then(({ data }) => {
        setResult(data.hits.hits)
      })
  }, [input])

  //Render danh sách kết quả gửi về sau khi search
  const renderSuggestion = () => {
    if (input !== undefined && searchFinish === false) {
      //Sau khi search hiện ra dropdown list các kết quả
      return <SearchSuggestion result={result} />
    } else if (!input) {
      //Nếu chưa search thì hiện gợi ý từ khoá tìm kiếm
      return (
        <React.Fragment>
          <SearchTrend />
          <SearchHistory />
        </React.Fragment>
      )
    } else if (result) {
      //Nếu đã search ra kết quả rồi và ấn enter, sẽ hiện ra list kết qủa và tắt thanh search đi
      return <ProductsList data={result} />
    }
  }
  return (
    <IonPage>
      <IonHeader className='ion-no-border' translucent={true}>
        <IonToolbar>
          <IonTitle>Tìm kiếm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <form onSubmit={searchSubmitHandler}>
            <IonSearchbar
              onIonChange={changeHandler}
              debounce={500}
              placeholder='Tìm kiếm sản phẩm...'></IonSearchbar>
          </form>
          {renderSuggestion()}
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Search
