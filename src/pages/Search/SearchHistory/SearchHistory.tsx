import React from 'react'
import {IonItemGroup, IonItem, IonLabel, IonIcon} from '@ionic/react';
import {arrowForwardOutline} from 'ionicons/icons'

const SearchHistory = () => {
  const history = ["Đèn phòng tắm", "Bàn ăn"]
  const renderHistory = history.map(item => {
    return (
      <IonItem className="SearchHistory-Item" lines="none" href="/abc">
        <IonLabel>{item}</IonLabel>
        <IonIcon icon={arrowForwardOutline}/>
      </IonItem>
    )
  })
  return (
    <IonItemGroup className="SearchHistory">
      <h3>Lịch sử tìm kiếm</h3>
      {renderHistory}
    </IonItemGroup>
  )
}

export default SearchHistory
