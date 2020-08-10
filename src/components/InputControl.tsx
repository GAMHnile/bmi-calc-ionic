import React from "react";
import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

const InputControl: React.FC<{
  selectedValue: "ftlbs" | "mkg";
  setUnit: (value: "ftlbs" | "mkg") => void;
}> = (props) => {

    const setUnitHandler = (event: CustomEvent) => {
        props.setUnit(event.detail.value);
    };
  return (
    <IonSegment value={props.selectedValue} onIonChange={setUnitHandler}>
      <IonSegmentButton value="mkg">
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>

      <IonSegmentButton value="ftlbs">
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;
