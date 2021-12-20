import React from "react";
import GoogleMapReact from "google-map-react";
import MarkerCentro from "./MarkerCentro";
import Marker from "./Marker";
import serviceEcobin from "../serviceEcobin";
import ICentro from "../ICentro";

const SimpleMap = ({ coordenadas }: any) => {
  const [centros, setCentros] = React.useState<ICentro[]>([]);
  const [centroCoord, setCentroCoord] = React.useState({
    lat: coordenadas.lat,
    lng: coordenadas.lng,
  });

  React.useEffect(() => {
    setCentroCoord({ lat: coordenadas.lat, lng: coordenadas.lng });
    serviceEcobin.sendGetRequestAllCentros().then((data) => {
      setCentros(data);
    });
  }, [coordenadas.lat, coordenadas.lng]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAt_XaqDFDbYJcAMpzNcGLdhv_VpTVCRGE" }}
        center={centroCoord}
        defaultZoom={12}
      >
        <Marker
          lat={coordenadas.lat}
          lng={coordenadas.lng}
          text="Yo"
          name="Eleazar"
          color="red"
        />

        {centros.map((centro, index) => {
        return (
          <MarkerCentro
            lat={centro.lat}
            lng={centro.lng}
            text={centro.nombre}
            name={centro.nombre}
            id={centro.id}
            color="blue"
            key={index}
          />
        );
      })}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
