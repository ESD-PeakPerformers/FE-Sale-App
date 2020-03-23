import React from 'react'
import {IonButton, IonItemGroup} from '@ionic/react'
import SketonTextSearch from '../../../components/SketonText/SketonTextSearch';
const SearchTrend = () => {
  const hotKeys = [
    "Bàn làm việc",
    "Ghế văn phòng",
    "Tủ sách",
    "Đèn phòng ngủ",
    "Đèn treo tường",
    "Sofa",
    "Thảm",
    "Rèm cửa"
  ]
  //Render những từ khoá hot
  const renderHotKeys = hotKeys
    ? hotKeys.map(item => <IonButton className="SearchTrend-Keyword" fill='outline' size='small'>{item}</IonButton>)
    : <SketonTextSearch/>
  return (
    <IonItemGroup className="SearchTrend">
      <h3>Từ khoá hot</h3>
      {renderHotKeys}
    </IonItemGroup>
  )
}

export default SearchTrend
