import React from "react";
import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";

const BmiResult: React.FC<{ value: number | string }> = ({ value }) => (
  <IonRow>
    <IonCol>
      <IonCard>
        <IonCardContent>
          <h2>{value}</h2>
        </IonCardContent>
      </IonCard>
    </IonCol>
  </IonRow>
);

export default BmiResult;
