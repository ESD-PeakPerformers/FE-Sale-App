import React,{useRef,useEffect} from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid,IonSearchbar} from '@ionic/react';
import SearchTrend from './SearchTrend/SearchTrend';
import SearchHistory from './SearchHistory/SearchHistory';

const Search = () => {
  const searchInput = useRef()
  useEffect(() => {
    console.log('this is run');
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
          <IonSearchbar ref={searchInput} autofocus="true" debounce={500} placeholder="Tìm kiếm sản phẩm..."></IonSearchbar>
          <SearchTrend/>
          <SearchHistory/>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Search;
