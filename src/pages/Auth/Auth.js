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
  IonItemGroup,
  IonInput,
  IonItem,
  IonButton
} from '@ionic/react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const Auth = ({history}) => {
  const [isLogin,
    setIsLogin] = useState(true)
  const [loginInput,
    setLoginInput] = useState()
  const [regisInput, setRegisInput] = useState()
  const submitChangeHandler = (e) => {
    const {name, value} = e.target
    setLoginInput(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const regisChangeHandler = (e) => {
    const {name, value} = e.target
    setRegisInput(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if(isLogin){
      axios
        .post(process.env.REACT_APP_BASE_URL + 'users/login', {
        ...loginInput
      })
        .then(() => {
          history.push('/products')
        })
        .catch(err => console.log(err))
    }else{
      axios
        .post(process.env.REACT_APP_BASE_URL + 'users/register', {
        ...regisInput
      })
        .then(() => {
          history.push('/auth')
        })
        .catch(err => console.log(err))
    }
  }

  const renderSegment = () => {
    if (isLogin) {
      return (
        <IonItemGroup>
          <form onSubmit={submitHandler}>
            <IonItem>
              <IonInput
                placeholder="Email"
                type="email"
                name="email"
                onIonInput={submitChangeHandler}
                clearInput={true}
                required/>
            </IonItem>
            <IonItem>
              <IonInput
                placeholder="Password"
                type="password"
                name="password"
                clearInput={true}
                onIonInput={submitChangeHandler}
                required/>
            </IonItem>
            <IonButton
              color="primary"
              style={{
              marginTop: '2em'
            }}
              type='submit'
              expand='block'>Đăng nhập</IonButton>
          </form>
        </IonItemGroup>
      )
    } else {
      return (
        <IonItemGroup>
          <form onSubmit={submitHandler}> 
          <IonItem>
            <IonInput placeholder="Họ tên" name="fullname" type="text" onIonInput={regisChangeHandler} clearInput={true} required/>
          </IonItem>
          <IonItem>
            <IonInput placeholder="Số điện thoại" name="phone" type="tel" onIonInput={regisChangeHandler} clearInput={true} required/>
          </IonItem>
          <IonItem>
            <IonInput placeholder="Email" name="email" type="email" onIonInput={regisChangeHandler} clearInput={true} required/>
          </IonItem>
          <IonItem>
            <IonInput placeholder="Mật khẩu" name="password" type='password' onIonInput={regisChangeHandler} clearInput={true} required/>
          </IonItem>
          <IonButton
            style={{
            marginTop: '2em'
          }}
            type='submit'
            color="primary"
            expand='block'>Đăng ký</IonButton>
          </form>
        </IonItemGroup>
      )
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Đăng nhập / Đăng ký</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonSegment>
          <IonSegmentButton value="login" onClick={() => setIsLogin(true)}>
            <IonLabel>Đăng nhập</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="logout" onClick={() => setIsLogin(false)}>
            <IonLabel>Đăng ký</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {renderSegment()}
      </IonContent>
    </IonPage>
  )
}

export default withRouter(Auth)
