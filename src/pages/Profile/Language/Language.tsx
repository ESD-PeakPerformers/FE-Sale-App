import React from 'react'
import {connect} from 'react-redux'
import {
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonItemGroup,
  IonToolbar,
} from '@ionic/react'
import {Dispatch} from 'redux'
import {changeLanguage} from '../../../redux/Language/Language.action'
import Translate from '../../../i18n/Translate'
import {useIntl} from 'react-intl'

interface Props {
  changeLanguage: (locale: string) => void
}
const Language: React.FC<Props> = ({changeLanguage}) => {
  const intl = useIntl()
  return (
    <IonItem lines='inset' className='Ion-Item-NonBg'>
      <IonLabel>{Translate('Language')}</IonLabel>
      <IonSelect
        multiple={false}
        cancelText={intl.formatMessage({id: 'Back'})}
        okText={intl.formatMessage({id: 'Select'})}
        onIonChange={(e: any) => {
          changeLanguage(e.detail.value)
        }}>
        <IonSelectOption value='vi'>{Translate('Vietnamese')}</IonSelectOption>
        <IonSelectOption value='en'>{Translate('English')}</IonSelectOption>
      </IonSelect>
    </IonItem>
  )
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeLanguage: (locale: string) => dispatch(changeLanguage(locale)),
})
export default connect(
  null,
  mapDispatchToProps,
)(Language)
