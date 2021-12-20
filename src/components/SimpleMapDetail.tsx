import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import MarkerCentro from "./MarkerCentro";

const SimpleMapDetail = ({ coordinates }: any) => {
  const [center, setCenter] = useState({
    lat: coordinates.lat,
    lng: coordinates.lng,
  });
  const [nombre, setNombre] = useState(coordinates.nombre);
  React.useEffect(() => {
    setCenter({ lat: coordinates.lat, lng: coordinates.lng });
    setNombre(coordinates.nombre);
  }, [coordinates.lat, coordinates.lng, coordinates.nombre]);

  return (
    <div style={{ height: "40vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAt_XaqDFDbYJcAMpzNcGLdhv_VpTVCRGE" }}
        center={center}
        defaultZoom={15}
      >
        <MarkerCentro
          lat={center.lat}
          lng={center.lng}
          text={nombre}
          color="blue"
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMapDetail;
