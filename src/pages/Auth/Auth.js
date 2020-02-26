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
  IonButton,
  IonLoading,
  IonAlert
} from '@ionic/react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const Auth = ({history}) => {
  const [segment,
    setSegment] = useState("login")
  const [loginInput,
    setLoginInput] = useState()
  const [regisInput,
    setRegisInput] = useState()
  const [showLoading, setShowLoading] = useState(false)
  const [showAlert, setShowAlert] = useState({})

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
  const segmentChange = (e) => {
    setSegment(e.target.value);
    console.log(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setShowLoading(true)
    //Dang nhap
    if (segment === "login") {
      axios
        .post(process.env.REACT_APP_BASE_URL + 'users/login', {
        ...loginInput
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
        .post(process.env.REACT_APP_BASE_URL + 'users/register', {
        ...regisInput
      })
        .then(() => {
          //Dang nhap sau khi dang ky 
          axios
            .post(process.env.REACT_APP_BASE_URL + 'users/login', {
            username: regisInput.username,
            password: regisInput.password
          })
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
      return (
        <IonItemGroup>
          <form onSubmit={submitHandler}>
            <IonItem>
              <IonInput
                placeholder="Email"
                type="email"
                name="username"
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
              <IonInput
                placeholder="Họ tên"
                name="fullname"
                type="text"
                onIonInput={regisChangeHandler}
                clearInput={true}
                required/>
            </IonItem>
            <IonItem>
              <IonInput
                placeholder="Số điện thoại"
                name="phone"
                type="tel"
                onIonInput={regisChangeHandler}
                clearInput={true}
                required/>
            </IonItem>
            <IonItem>
              <IonInput
                placeholder="Email"
                name="username"
                type="email"
                onIonInput={regisChangeHandler}
                clearInput={true}
                required/>
            </IonItem>
            <IonItem>
              <IonInput
                placeholder="Mật khẩu"
                name="password"
                type='password'
                onIonInput={regisChangeHandler}
                clearInput={true}
                required/>
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

        <IonSegment scrollable onIonChange={segmentChange}>
          <IonSegmentButton value="login">
            <IonLabel>Đăng nhập</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="logout">
            <IonLabel>Đăng ký</IonLabel>
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

export default withRouter(Auth)
