import React from 'react'
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonButtons,
  IonMenuToggle,
  IonButton,
  IonLabel,
  IonSelect,
  IonSelectOption
} from '@ionic/react'

const SideMenu = () => {
  const cateOptions = [
    {
      val: 'Pepperoni',
      isChecked: false
    }, {
      val: 'Sausage',
      isChecked: false
    }, {
      val: 'Mushroom',
      isChecked: false
    }
  ];
  return (
    <IonMenu contentId="mainContent" side="end">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuToggle>Đóng</IonMenuToggle>
          </IonButtons>
          <IonTitle
            size='small'
            className="text-center"
            style={{
            fontWeight: 'bold'
          }}>
            Lọc sản phẩm
          </IonTitle>
          <IonButtons slot='end'>
            <IonButton className="lowercase">Bỏ chọn</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem>
          <IonLabel position="floating">Giá</IonLabel>
          <IonSelect>
            <IonSelectOption value="">Giá thấp dần</IonSelectOption>
            <IonSelectOption value="nes">Giá cao dần</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Rating</IonLabel>
          <IonSelect>
            <IonSelectOption value="">Trên 4 sao</IonSelectOption>
            <IonSelectOption value="nes">Trên 3 sao</IonSelectOption>
            <IonSelectOption value="nes">Trên 2 sao</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonContent>
    </IonMenu>
  )
}

export default SideMenu
