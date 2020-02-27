import React from 'react'
import {IonSkeletonText,IonChip} from '@ionic/react'

const SketonTextSearch = () => {
    return (
        <div className="SketonTextSearch">
        <IonChip><IonSkeletonText animated style={{ width: '50px' }}/></IonChip>
        <IonChip><IonSkeletonText animated style={{ width: '45px' }}/></IonChip>
        <IonChip><IonSkeletonText animated style={{ width: '55px' }}/></IonChip>
        <IonChip><IonSkeletonText animated style={{ width: '60px' }}/></IonChip>
        <IonChip><IonSkeletonText animated style={{ width: '50px' }}/></IonChip>
        <IonChip><IonSkeletonText animated style={{ width: '55px' }}/></IonChip>
        <IonChip><IonSkeletonText animated style={{ width: '60px' }}/></IonChip>
        <IonChip><IonSkeletonText animated style={{ width: '45px' }}/></IonChip>
        <IonChip><IonSkeletonText animated style={{ width: '55px' }}/></IonChip>
        </div>
    )
}

export default SketonTextSearch
