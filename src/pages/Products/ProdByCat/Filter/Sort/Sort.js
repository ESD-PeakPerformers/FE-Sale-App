import React from 'react'
import {
  IonButtons,
  IonButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption
} from '@ionic/react'

const Sort = ({selectHandler}) => {
  const customActionSheetOptions = {
    header: 'Sắp xếp theo:'
  };
  return (
    <IonButtons slot="start">
      <IonButton size='small'>
        <IonItem className="Sort-Select">
          <IonLabel>Sắp xếp</IonLabel>
          <IonSelect
            interfaceOptions={customActionSheetOptions}
            interface="action-sheet"
            cancelText="Quay lại"
            onIonChange={(e) => selectHandler(e)}>
            <IonSelectOption value="new_products">Hàng mới</IonSelectOption>
            <IonSelectOption value="best_seller">Bán chạy</IonSelectOption>
            <IonSelectOption value="best_discount">Giảm giá nhiều</IonSelectOption>
            <IonSelectOption value="price_low_to_high">Giá thấp tới cao</IonSelectOption>
            <IonSelectOption value="price_high_to_low">Giá cao tới thấp</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonButton>
    </IonButtons>
  )
}

export default Sort
