import React, { useState } from "react";
import ReactStarts from "react-stars";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonLabel,
  IonButton,
  IonTextarea
} from "@ionic/react";
import { userInfo } from "../../../../shared/Method";
import Cookies from "js-cookie";
import moment from "moment";
import axios from "axios";

interface Props{
  prodID: string
}
const Rating:React.FC<Props> = ({prodID}) => {
  const [isRating, setIsRating] = useState(false);
  const [starCount, setStarCount] = useState(0);
  const [message, setMessage] = useState();
  const data = [
    {
      username: "Pham Duc Minh",
      date: "20/02/2020",
      description:
        "Laboris proident est ipsum aliqua adipisicing adipisicing dolore. Consequat ulla" +
        "mco Lorem reprehenderit in laboris culpa enim velit pariatur. Ad et dolor Lorem " +
        "nostrud anim ipsum veniam excepteur non."
    }
  ];

  const ratingHandler = () => {
    if (!isRating) {
      setIsRating(true);
    }else{
      const body = {
        rating: starCount,
        review: message,
        datetime: moment().format('DD/MM/YYY')
      }
      axios.post(process.env.REACT_APP_BASE_URL + 'products/review/'+ prodID, body)
      .then(()=>{
        setIsRating(false)
      })
      .catch(err => console.log(err))
    }
  };

  const renderRating = data.map(cm => {
    return (
      <IonCard className="Product-Detail-Comment">
        <IonCardHeader className="Product-Detail-Comment-Header">
          <div>
            <IonLabel>{cm.username}</IonLabel>
            <ReactStarts
              value={4.5}
              count={5}
              size={14}
              color1={"#EDEDED"}
              color2={"#3880ff"}
            />
          </div>
          <IonLabel>{cm.date}</IonLabel>
        </IonCardHeader>
        <IonCardContent>{cm.description}</IonCardContent>
      </IonCard>
    );
  });

  const reviewForm = () => {
    const today = moment().format("DD/MM/YYYY");
    return (
      <IonCard className="Product-Detail-Comment">
        <IonCardHeader className="Product-Detail-Comment-Header">
          <div>
            {userInfo && <IonLabel>{userInfo.username}</IonLabel>}
            <ReactStarts
              value={0}
              count={5}
              size={24}
              color1={"#EDEDED"}
              color2={"#3880ff"}
              className="ReactStart-Active"
              onChange={e => setStarCount(e)}
            />
          </div>
          <IonLabel>{today}</IonLabel>
        </IonCardHeader>
        <IonCardContent>
          <IonTextarea
            placeholder="Nhận xét của bạn"
            onIonChange={e => setMessage(e.detail.value!)}
          />
        </IonCardContent>
      </IonCard>
    );
  };

  return (
    <div className="Product-Detail-Rating">
      <h3>Đánh giá</h3>
      {renderRating}
      {isRating ? reviewForm() : null}
      {Cookies.get("jwt") && (
        <IonButton expand="block" onClick={ratingHandler}>
          {isRating ? "Đăng nhận xét" : "Đánh giá sản phẩm này"}
        </IonButton>
      )}
    </div>
  );
};

export default Rating;
