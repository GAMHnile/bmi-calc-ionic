import React from "react";
import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";

const BmiResult: React.FC<{ value: number }> = ({ value }) => (
  <IonRow>
    <IonCol>
      <IonCard>
        <IonCardContent className="ion-text-center" >
          <h2>Your body mass index is: </h2>
          <h3>{value.toFixed(2)}</h3>
        </IonCardContent>
      </IonCard>
    </IonCol>
  </IonRow>
);

export default BmiResult;
