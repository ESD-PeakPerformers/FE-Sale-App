import React, {useState} from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonLoading,
  IonAlert
} from '@ionic/react';

import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { SegmentChangeEventDetail } from '@ionic/core';
import Login from './Login/Login';
import Register from './Register/Register';
import translate from '../../i18n/Translate'

interface showAlert {
  isShow: boolean, 
  message?: string
}

interface requestBody {
  username: string, 
  password: string,
  fullname?: string, 
  phone?: string
}

const Auth:React.FC = () => {
  const history = useHistory()
  const [segment,
    setSegment] = useState("login")
  const [showLoading, setShowLoading] = useState(false)
  const [showAlert, setShowAlert] = useState<showAlert>({isShow: false, message:''})
  
  const segmentChange = (e:CustomEvent<SegmentChangeEventDetail>) => {
    setSegment((e.target as HTMLInputElement).value);
  }
 
  const submitHandler = (e:React.FormEvent<HTMLFormElement>, data:requestBody) => {
    e.preventDefault()
    setShowLoading(true)
    //Dang nhap
    if (segment === "login") {
      axios
        .post(process.env.REACT_APP_BASE_URL + 'auth/login', {
        ...data
      })
        .then(() => {
          history.push('/products')
          setShowLoading(false)
        })
        .catch(err => {
          setShowAlert({isShow: true, message: err.response.data})
          setShowLoading(false)
        })
    } else {
      //Dang ky
      axios
        .post(process.env.REACT_APP_BASE_URL + 'auth/register', {
        ...data
      })
        .then(() => {
          //Dang nhap sau khi dang ky 
          const body = data && {
            username: data.username,
            password: data.password
          }
          axios
            .post(process.env.REACT_APP_BASE_URL + 'auth/login', body)
            .then(() => {
              setShowLoading(false)
              history.push('/products')
            })
            .catch(err => {
              setShowAlert({isShow: true, message: err.response.data})
              setShowLoading(false)
            })
        })
        .catch(err => {
          setShowAlert({isShow: true, message: err.response.data})
          setShowLoading(false)
        })
    }
  }

  const renderSegment = () => {
    if (segment === "login") {
      return(
        <Login submitHandler={submitHandler}/>
      )
    } else {
      return(
        <Register submitHandler={submitHandler}/>
      )
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{translate("Sign in / Register")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonSegment scrollable onIonChange={segmentChange}>
          <IonSegmentButton value="login">
            <IonLabel>{translate("Sign in")}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="logout">
            <IonLabel>{translate("Register")}</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {renderSegment()}
        <IonLoading
        isOpen={showLoading}
        message={'Đang đăng nhập...'}
        duration={5000}
        />


      <IonAlert
          isOpen={showAlert.isShow}
          onDidDismiss={() => setShowAlert({...showAlert, isShow: false})}
          header={'Thông báo'}
          message={showAlert.message}
          buttons={['Đóng']}
        />
      </IonContent>
    </IonPage>
  )
}

export default Auth
