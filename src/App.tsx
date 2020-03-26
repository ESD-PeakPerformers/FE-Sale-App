import React from 'react'
import {Route} from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import {IonReactRouter} from '@ionic/react-router'
import {
  homeOutline,
  searchOutline,
  chatbubbleOutline,
  personCircleOutline,
  cartOutline,
  gridOutline,
} from 'ionicons/icons'
import Products from './pages/Products/Products'
import Search from './pages/Search/Search'
import Profile from './pages/Profile/Profile'
import Categories from './pages/Categories/Categories'
import Cart from './pages/Cart/Cart'
import Landing from './pages/Landing'
import Auth from './pages/Auth/Auth'
import ProductDetail from './pages/Products/ProductDetail/ProductDetail'
import {I18nProvider} from './i18n/Index'
import {selectLanguageLocale} from './redux/Language/Language.selector'
import {State} from './redux/root.reducer.type'
import {connect} from 'react-redux'
import translate from './i18n/Translate'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

/* SASS */
import './style/main.scss'
import ProdByCat from './pages/Products/ProdByCat/ProdByCat'
interface Props {
  locale: string
}
const App: React.FC<Props> = ({locale}) => (
  <IonApp>
    <IonReactRouter>
      <I18nProvider locale={locale}>
        <IonTabs>
          <IonRouterOutlet>
            <Route path='/products' component={Products} exact={true} />
            <Route
              path='/products/:category/:cateID'
              component={ProdByCat}
              exact={true}
            />
            <Route
              path='/products/:category-:prodCode-:id'
              component={ProductDetail}
              exact={true}
            />
            <Route path='/search' component={Search} exact={true} />
            <Route path='/categories' component={Categories} exact={true} />
            <Route path='/cart' component={Cart} exact={true} />
            <Route path='/profile' component={Profile} exact={true} />
            <Route path='/auth' component={Auth} exact={true} />
            <Route path='/' component={Landing} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot='bottom'>
            <IonTabButton tab='products' href='/products'>
              <IonIcon icon={homeOutline} />
              <IonLabel>{translate('Home')}</IonLabel>
            </IonTabButton>

            <IonTabButton tab='categories' href='/categories'>
              <IonIcon icon={gridOutline} />
              <IonLabel>{translate('Categories')}</IonLabel>
            </IonTabButton>

            <IonTabButton tab='search' href='/search'>
              <IonIcon icon={searchOutline} />
              <IonLabel>{translate('Search')}</IonLabel>
            </IonTabButton>

            <IonTabButton tab='notification' href='/cart'>
              <IonIcon icon={cartOutline} />
              <IonLabel>{translate('Cart')}</IonLabel>
            </IonTabButton>

            <IonTabButton tab='profile' href='/profile'>
              <IonIcon icon={personCircleOutline} />
              <IonLabel>{translate('Profile')}</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </I18nProvider>
    </IonReactRouter>
  </IonApp>
)

const mapStateToProps = (state: State) => ({
  locale: selectLanguageLocale(state),
})

export default connect(mapStateToProps)(App)
