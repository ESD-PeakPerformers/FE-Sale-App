import React, { useState } from 'react'
import {
  IonItemGroup,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonLabel,
} from '@ionic/react'
import { logoFacebook, logoGoogle } from 'ionicons/icons'
import { useIntl } from 'react-intl'
import translate from '../../../i18n/Translate'

interface Props {
  submitHandler: (e: React.FormEvent<HTMLFormElement>, data: loginInput) => void
}

interface loginInput {
  username: string
  password: string
}

const Login: React.FC<Props> = ({ submitHandler }) => {
  const intl = useIntl()
  const [loginInput, setLoginInput] = useState<loginInput>({
    username: '',
    password: '',
  })

  //Handle input change
  const inputChangeHandler = (e: CustomEvent<KeyboardEvent>) => {
    const { name, value } = e.target as HTMLInputElement
    setLoginInput(
      (prev): loginInput => ({
        ...prev,
        [name]: value,
      }),
    )
  }

  return (
    <IonItemGroup>
      <form onSubmit={e => submitHandler(e, loginInput)}>
        <IonItem>
          <IonInput
            placeholder={intl.formatMessage({ id: 'Email' })}
            type='email'
            name='username'
            onIonInput={inputChangeHandler}
            clearInput={true}
            required
          />
        </IonItem>
        <IonItem>
          <IonInput
            placeholder={intl.formatMessage({ id: 'Password' })}
            type='password'
            name='password'
            clearInput={true}
            onIonInput={inputChangeHandler}
            required
          />
        </IonItem>
        <IonButton
          color='primary'
          style={{ marginTop: '2em' }}
          type='submit'
          expand='block'>
          {translate('Sign in')}
        </IonButton>
      </form>

      <IonLabel id='Login-SubText'>{translate('Or sign in with')}</IonLabel>
      <IonButton
        color='danger'
        style={{ marginTop: '1.5em' }}
        href={process.env.REACT_APP_BASE_URL_AUTH + 'auth/google'}
        expand='block'>
        <IonIcon icon={logoGoogle} />
      </IonButton>

      <IonButton
        color='primary'
        style={{ marginTop: '1em' }}
        href={process.env.REACT_APP_BASE_URL_AUTH + 'auth/facebook'}
        type='submit'
        expand='block'>
        <IonIcon icon={logoFacebook} />
      </IonButton>
    </IonItemGroup>
  )
}

export default Login
