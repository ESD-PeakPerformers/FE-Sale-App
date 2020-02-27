import React,{useRef,useEffect,useState} from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid,IonSearchbar, IonItemGroup,IonItem} from '@ionic/react';
import SearchTrend from './SearchTrend/SearchTrend';
import SearchHistory from './SearchHistory/SearchHistory';
import axios from 'axios';

const Search = () => {
  const searchInput = useRef()
  const [input, setInput] = useState()
  const [result, setResult] = useState()

  const changeHandler = (e) => {
    setTimeout(()=>{
      setInput(e.target.value)
    }, 200)
  }

  useEffect(() => {
    axios.post('https://search-es-dynamodb-2t7d3wspewmarptl72tvpnjfa4.us-west-2.es.amazonaws.com/products/_search',{
      query:{
        match:{
          prodName: input
        }
      }
    })
    .then(({data})=>{
      setResult(data.hits)
    })
  }, [input])

  const renderSuggestion = () => {
    if(input){
      return(
        <IonItemGroup>
          {result && result.hits.map(item => <IonItem href={"/products/" + item._source.prodCode + "-" + item._source.prodID }>{item._source.prodName}</IonItem>)}
        </IonItemGroup>
      )
    }else{
      return(
        <React.Fragment>
          <SearchTrend/>
          <SearchHistory/>
        </React.Fragment>
      )
    }
  }
  useEffect(() => {
    searchInput.current.focus()
  }, [])

  return (
    <IonPage>
      <IonHeader  className="ion-no-border">
        <IonToolbar>
          <IonTitle>Tìm kiếm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonSearchbar ref={searchInput} autofocus="true" onIonChange={changeHandler} debounce={500} placeholder="Tìm kiếm sản phẩm..."></IonSearchbar>
          {renderSuggestion()}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Search;
