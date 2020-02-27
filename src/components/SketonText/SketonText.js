import React from 'react'
import {IonSkeletonText, IonList, IonLabel, IonItem, IonThumbnail} from '@ionic/react'
const SketonText = () => {
    return (
        <>
          <IonList>
            <IonItem>
              <IonThumbnail slot="start">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '100%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '100%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '100%' }} />
                </p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonThumbnail slot="start">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '100%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '100%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '100%' }} />
                </p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonThumbnail slot="start">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '100%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '100%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '100%' }} />
                </p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonThumbnail slot="start">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '100%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '100%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '100%' }} />
                </p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonThumbnail slot="start">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '100%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '100%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '100%' }} />
                </p>
              </IonLabel>
            </IonItem>
          </IonList>
        </>
    )
}

export default SketonText
