import React from "react";
import { IonCard, IonCardContent } from "@ionic/react";

import './BmiResult.css';

const BmiResult: React.FC<{ value: number }> = ({ value }) => (

      <IonCard id="result">
        <IonCardContent className="ion-text-center" >
          <h2>Your body mass index is: </h2>
          <h3>{value.toFixed(2)}</h3>
        </IonCardContent>
      </IonCard>
  
);

export default BmiResult;
