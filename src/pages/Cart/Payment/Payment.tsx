import React from "react";
import { IonToolbar, IonItem, IonIcon } from "@ionic/react";

const Payment = () => {
  return (
    <IonToolbar className="Payment">
      <h3>
        Thanh toán
      </h3>
      <IonItem className="DeliverAddress"></IonItem>
    </IonToolbar>
  );
};

export default Payment;
