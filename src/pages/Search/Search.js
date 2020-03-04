import React, {useRef, useEffect, useState} from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonSearchbar,
  IonItemGroup,
  IonItem,
  IonLabel,
  IonThumbnail
} from '@ionic/react';
import SearchTrend from './SearchTrend/SearchTrend';
import SearchHistory from './SearchHistory/SearchHistory';
import axios from 'axios';
import ProductsList from '../../components/ProductsList.js/ProductsList';
import {getImage} from '../../shared/Method'

const Search = () => {
  const searchInput = useRef()
  const [input,
    setInput] = useState()
  const [result,
    setResult] = useState()
  const [searchFinish,
    setSearchFinish] = useState(false)

  const changeHandler = (e) => {
    setInput(e.target.value)
  }

  const searchSubmitHandler = (e) => {
    e.preventDefault()
    setSearchFinish(true)
  }

  //Gửi keyword và nhận về kết quả từ Elastic Search
  useEffect(() => {
    axios.post('https://search-es-dynamodb-2t7d3wspewmarptl72tvpnjfa4.us-west-2.es.amazonaws.com' +
        '/products/_search', {
      query: {
        match: {
          prodName: input
        }
      }
    }, {withCredentials: false}).then(({data}) => {
      setResult(data.hits)
    })
  }, [input])

  const renderSuggestion = () => {
    if (input && searchFinish === false) {
      return (
        <IonItemGroup>
          {result && result
            .hits
            .map(item => {
              return (
                <IonItem
                  href={"/products/" + item._source.prodCode + "-" + item._source.prodID}>
                  <IonLabel>{item._source.prodName}</IonLabel>
                  <IonThumbnail slot="start">
                    <img src={getImage(item._source.prodID, 0, "png")} alt={item._source.prodName + "-image"}/>
                  </IonThumbnail>
                </IonItem>
              )
            })}
        </IonItemGroup>
      )
    } else if (!input) {
      return (
        <React.Fragment>
          <SearchTrend/>
          <SearchHistory/>
        </React.Fragment>
      )
    } else {
      return <ProductsList data={result && result.hits}/>
    }
  }
  useEffect(() => {
    searchInput
      .current
      .focus()
  }, [])

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Tìm kiếm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <form onSubmit={searchSubmitHandler}>
            <IonSearchbar
              ref={searchInput}
              autofocus="true"
              onIonChange={changeHandler}
              debounce={500}
              placeholder="Tìm kiếm sản phẩm..."></IonSearchbar>
          </form>
          {renderSuggestion()}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Search;
