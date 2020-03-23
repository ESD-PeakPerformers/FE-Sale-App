import React, {useState} from 'react'
import {IonItemGroup, IonItem, IonInput, IonButton} from '@ionic/react'
import {useIntl} from 'react-intl'
import Translate from '../../../i18n/Translate';

interface Props {
  submitHandler: (
    e: React.FormEvent<HTMLFormElement>,
    data: registerInput,
  ) => void
}
interface registerInput {
  username: string
  password: string
  fullname: string
  phone: string
}
const Register: React.FC<Props> = ({submitHandler}) => {
  const intl = useIntl()
  const [regisInput, setRegisInput] = useState<registerInput>({
    username: '',
    password: '',
    fullname: '',
    phone: '',
  })

  //Handler input change
  const inputChangeHandler = (e: CustomEvent<KeyboardEvent>) => {
    const {name, value} = e.target as HTMLInputElement
    setRegisInput(prev => ({
      ...prev,
      [name]: value,
    }))
  }
  return (
    <IonItemGroup>
      <form onSubmit={e => submitHandler(e, regisInput)}>
        <IonItem>
          <IonInput
            placeholder={intl.formatMessage({id:'Fullname'})}
            name='fullname'
            type='text'
            onIonInput={inputChangeHandler}
            clearInput={true}
            required
          />
        </IonItem>
        <IonItem>
          <IonInput
            placeholder={intl.formatMessage({id:'Phone number'})}
            name='phone'
            type='tel'
            onIonInput={inputChangeHandler}
            clearInput={true}
            required
          />
        </IonItem>
        <IonItem>
          <IonInput
            placeholder={intl.formatMessage({id:'Email'})}
            name='username'
            type='email'
            onIonInput={inputChangeHandler}
            clearInput={true}
            required
          />
        </IonItem>
        <IonItem>
          <IonInput
            placeholder={intl.formatMessage({id:'Password'})}
            name='password'
            type='password'
            onIonInput={inputChangeHandler}
            clearInput={true}
            required
          />
        </IonItem>
        <IonButton
          style={{marginTop: '2em'}}
          type='submit'
          color='primary'
          expand='block'>
          {Translate("Register")}
        </IonButton>
      </form>
    </IonItemGroup>
  )
}

export default Register
