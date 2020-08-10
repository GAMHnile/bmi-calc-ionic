import React, { useRef, useState } from "react";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonAlert,
} from "@ionic/react";

import BmiControls from "./components/BmiControls";
import BmiResult from "./components/BmiResult";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import InputControl from "./components/InputControl";

const App: React.FC = () => {
  const [error, setError] = useState<string>();
  const [calculatedBmi, setCalculatedBmi] = useState<number>();
  const [selectedUnit, setSelectedUnit] = useState<"ftlbs" | "mkg">('mkg');
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const calculateBmi = () => {
    let weight = weightInputRef.current!.value;
    let height = heightInputRef.current!.value;

    if (!weight || !height || +weight <= 0 || +height <= 0) {
      setError("Please enter a valid non-negative number");
      return;
    }
    const weightConversionFactor = selectedUnit === 'mkg'? 1 : 2.2;
    const heightConversionFactor = selectedUnit === 'mkg'? 1 : 3.28;
    weight = +weight / weightConversionFactor;
    height = +height / heightConversionFactor;

    const bmi = weight / (height * height);
    setCalculatedBmi(bmi);
  };
  const resetInputs = () => {
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
  };

  const clearError = () => {
    setError("");
  };
  return (
    <React.Fragment>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: "Okay", handler: clearError }]}
      />
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Bmi Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControl selectedValue={selectedUnit} setUnit={setSelectedUnit} />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Height ({selectedUnit === 'mkg'? 'meters' : 'feet'})</IonLabel>
                  <IonInput type="number" ref={heightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Weight ({selectedUnit === 'mkg'? 'kg' : 'pounds'})</IonLabel>
                  <IonInput type="number" ref={weightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <BmiControls onCalculate={calculateBmi} onReset={resetInputs} />

            {calculatedBmi && <BmiResult value={calculatedBmi} />}
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  );
};

export default App;
