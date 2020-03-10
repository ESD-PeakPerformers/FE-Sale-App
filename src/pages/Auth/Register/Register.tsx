import React,{useState} from 'react'
import {IonItemGroup,
    IonItem,
    IonInput,
    IonButton } from '@ionic/react'

interface Props {
    submitHandler: (e:React.FormEvent<HTMLFormElement>, data:registerInput)=>void
}
    
interface registerInput {
    username: string, 
    password: string, 
    fullname: string, 
    phone: string
  }
const Register: React.FC<Props> = ({submitHandler}) => {
  const [regisInput,
    setRegisInput] = useState<registerInput>({username: '', 
        password: '', 
        fullname: '', 
        phone: ''})

    const regisChangeHandler = (e:CustomEvent<KeyboardEvent>) => {
        const {name, value} = e.target as HTMLInputElement
        setRegisInput(prev => ({
          ...prev,
          [name]: value
        }))
      }
        return (
            <IonItemGroup>
              <form onSubmit={(e)=>submitHandler(e,regisInput)}>
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

export default Register
