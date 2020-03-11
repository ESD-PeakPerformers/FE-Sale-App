import React,{useState} from 'react'
import {IonItemGroup,
    IonItem,
    IonInput,
    IonButton, 
    IonIcon,
    IonLabel
} from '@ionic/react'
import {logoFacebook, logoGoogle} from 'ionicons/icons'
import axios from 'axios'

interface Props {
    submitHandler: (e:React.FormEvent<HTMLFormElement>, data: loginInput)=>void
}

interface loginInput {
    username: string, 
    password: string
}

const Login: React.FC<Props> = ({submitHandler}) => {
    const [loginInput,
        setLoginInput] = useState<loginInput>({username:'', password:''})
    
  const loginChangeHandler = (e:CustomEvent<KeyboardEvent>) => {
    const {name, value} = e.target as HTMLInputElement
    setLoginInput((prev):loginInput  => ({
      ...prev,
      [name]: value
    }))
  }

    return (
        <IonItemGroup>
          <form onSubmit={(e) => submitHandler(e, loginInput)}>
            <IonItem>
              <IonInput
                placeholder="Email"
                type="email"
                name="username"
                onIonInput={loginChangeHandler}
                clearInput={true}
                required/>
            </IonItem>
            <IonItem>
              <IonInput
                placeholder="Password"
                type="password"
                name="password"
                clearInput={true}
                onIonInput={loginChangeHandler}
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

            <IonLabel id="Login-SubText">Hoặc đăng nhập với</IonLabel>
          <IonButton
            color="danger"
            style={{marginTop: '1.5em'}}
            href={process.env.REACT_APP_BASE_URL + 'auth/google'}
            expand='block'><IonIcon icon={logoGoogle}/></IonButton>

            <IonButton
            color="primary"
            style={{marginTop: '1em'}}
            href={process.env.REACT_APP_BASE_URL + 'auth/facebook'}
            type='submit'
            expand='block'><IonIcon icon={logoFacebook}/></IonButton>
        </IonItemGroup>
      )
}

export default Login
