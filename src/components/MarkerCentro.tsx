import React from "react";
import "./MarkerCentro.css";
import { IonRouterLink } from "@ionic/react";

const MarkerCentro = (props: any) => {
  const { color, name, id } = props;
  return (
    <React.Fragment>
      <IonRouterLink routerLink={`/detalle/centros/${id}`}>
      <div className="marker" style={{ backgroundColor: color, cursor: "pointer" }}>
        <div className="textStyle" style={{
          color: "black",
          padding: "15px 10px",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "flex-end",
        }}>{name}</div>
      </div>
      </IonRouterLink>
    </React.Fragment>
  );
};

export default MarkerCentro;
