import React from 'react'
import {IonSkeletonText, IonList, IonLabel, IonListHeader, IonItem, IonThumbnail, IonAvatar} from '@ionic/react'
const SketonText = () => {
    return (
        <>
          <IonList>
            <IonListHeader>
              <IonLabel>
                <IonSkeletonText animated style={{ width: '100%' }} />
              </IonLabel>
            </IonListHeader>
            <IonItem>
              <IonAvatar slot="start">
                <IonSkeletonText animated />
              </IonAvatar>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <IonSkeletonText animated />
              </IonAvatar>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
            </IonItem>
          </IonList>
        </>
    )
}

export default SketonText
