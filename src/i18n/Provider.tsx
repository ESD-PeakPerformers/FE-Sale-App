import React, {Fragment} from 'react'
import {IntlProvider} from 'react-intl'
import {Locales} from './Locales'

import Content from './Content/Index'
interface Props {
  locale: string
}
const Provider: React.FC<Props> = ({children, locale = Locales.vietnamese}) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={Content[locale]}>
        {children}
    </IntlProvider>
)
export default Provider
