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
  const loginWithFacebook = () => {
      axios.get(process.env.REACT_APP_BASE_URL + 'auth/facebook')
      .then((data)=>{
        console.log(data);
      })
      .catch(err => console.log(err))
  }
  const loginWithGoogle= () => {
    axios.get(process.env.REACT_APP_BASE_URL + 'auth/google')
    .then(()=>{

    })
    .catch(err => console.log(err))
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
            href="https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fgoogle%2Fcallback&scope=openid%20email%20profile&client_id=189453637136-p66dl5k2flq4tmecjvcs7kvm37qgc219.apps.googleusercontent.com"
            expand='block'><IonIcon icon={logoGoogle}/></IonButton>

            <IonButton
            color="primary"
            style={{marginTop: '1em'}}
            href="https://www.facebook.com/v3.2/dialog/oauth?response_type=code&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fauth%2Ffacebook%2Fcallback&scope=email&client_id=515455325837586"
            type='submit'
            expand='block'><IonIcon icon={logoFacebook}/></IonButton>
        </IonItemGroup>
      )
}

export default Login
