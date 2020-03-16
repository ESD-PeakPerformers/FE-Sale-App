import React from "react";
import { IonToolbar, IonButtons, IonButton, IonItem, IonIcon } from "@ionic/react";
import {homeOutline} from 'ionicons/icons/'
interface Props {}

const DeliverAddress = (props: Props) => {
  return (
    <IonToolbar className="Product-Description-Category">
      <h3
        style={{
          display: "inline"
        }}>
        Địa chỉ giao hàng
      </h3>
      <IonItem className="DeliverAddress">
          <IonIcon icon={homeOutline} color='primary'/>
          <div>
              <h4>195 Tôn Thất Thuyết</h4>
              <p>Phường 3, Quận 4, TP. Hồ Chí Minh</p>
          </div>
      </IonItem>
    </IonToolbar>
  );
};

export default DeliverAddress;
