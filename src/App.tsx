import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, camera, navigate } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import DetalleProyecto from "./pages/DetalleProyecto";
import DetallePuntoReciclaje from "./pages/DetallePuntoReciclaje";
import DetalleReconocimiento from "./pages/DetalleReconocimiento";
import ProyectosRecomendables from "./pages/ProyectosRecomendables";
import CentrosRecomendables from "./pages/CentrosRecomendables";

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

// import { Plugins } from "@capacitor/core";
// const { SplashScreen } = Plugins;

require("dotenv").config();

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/tab1" component={Tab1} exact={true} />
            <Route path="/tab2" component={Tab2} exact={true} />
            <Route path="/tab3" component={Tab3} />
            <Route path="/detalle/proyecto/:id" component={DetalleProyecto} />
            <Route
              path="/detalle/centros/:id"
              component={DetallePuntoReciclaje}
            />
            <Route
              path="/detalle/reconocimiento"
              component={DetalleReconocimiento}
            />
            <Route
              path="/detalle/recomendacion/proyectos/:id"
              component={ProyectosRecomendables}
            />
            <Route
              path="/detalle/recomendacion/centros/:id"
              component={CentrosRecomendables}
            />
            <Route
              path="/"
              render={() => <Redirect to="/tab1" />}
              exact={true}
            />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={home} />
              <IonLabel>Inicio</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={camera} />
              <IonLabel>Identificar</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={navigate} />
              <IonLabel>Puntos</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
