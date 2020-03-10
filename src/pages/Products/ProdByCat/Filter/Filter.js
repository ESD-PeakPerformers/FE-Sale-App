import React from 'react'
import Sort from './Sort/Sort'
import {IonToolbar, IonButtons, IonMenuButton, IonIcon} from '@ionic/react'
import {optionsOutline} from 'ionicons/icons'
const Filter = ({selectHandler}) => {
  return (
    <IonToolbar className="Sort-Filter">
      {/* Left sort button */}
      <Sort selectHandler={selectHandler}/> 
      
      {/* Right filter button */}
      <IonButtons slot="end">
        <IonMenuButton>
          <IonIcon icon={optionsOutline}/>
        </IonMenuButton>
      </IonButtons>
      
    </IonToolbar>
  )
}

export default Filter
