import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {homeOutline, searchOutline, chatbubbleOutline, notificationsOutline, personCircleOutline} from 'ionicons/icons';
import Products from './pages/Products/Products';
import Search from './pages/Search/Search';
import Profile from './pages/Profile/Profile';
import Message from './pages/Message/Message';
import Notification from './pages/Notification/Notification';
import Landing from './pages/Landing'
import Auth from './pages/Auth/Auth'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* SASS */
import './style/main.scss';

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/products" component={Products} exact={true}/>
          <Route path="/search" component={Search} exact={true}/>
          <Route path="/message" component={Message} exact={true}/>
          <Route path="/notification" component={Notification} exact={true}/>
          <Route path="/profile" component={Profile} exact={true}/>
          <Route path="/auth" component={Auth} exact={true}/>
          <Route path="/" component={Landing} exact={true}/>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">

          <IonTabButton tab="products" href="/products">
            <IonIcon icon={homeOutline}/>
            <IonLabel>Khám phá</IonLabel>
          </IonTabButton>

          <IonTabButton tab="search" href="/search">
            <IonIcon icon={searchOutline}/>
            <IonLabel>Tìm kiếm</IonLabel>
          </IonTabButton>

          <IonTabButton tab="message" href="/message">
            <IonIcon icon={chatbubbleOutline}/>
            <IonLabel>Tin nhắn</IonLabel>
          </IonTabButton>

          <IonTabButton tab="notification" href="/notification">
            <IonIcon icon={notificationsOutline}/>
            <IonLabel>Thông báo</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={personCircleOutline}/>
              <IonLabel>Cá nhân</IonLabel>
            </IonTabButton>

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
