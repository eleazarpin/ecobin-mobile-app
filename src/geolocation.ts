import { Plugins } from "@capacitor/core";

const { Geolocation } = Plugins;

// import { Geolocation } from "@capacitor/core";

const geolocation = {
  getCurrentPosition: () => {

    return Geolocation.getCurrentPosition({timeout: 30000, enableHighAccuracy: true});
    // console.log("Coordenadas: ", coordinates);
    // return coordinates;
  }
};

export default geolocation;
