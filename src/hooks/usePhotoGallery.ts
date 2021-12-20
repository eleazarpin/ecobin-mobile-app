// import { useCamera } from "@ionic/react-hooks/camera";
// import { useFilesystem, base64FromPath } from "@ionic/react-hooks/filesystem";
// import { useStorage } from "@ionic/react-hooks/storage";
// import { isPlatform, getPlatforms } from "@ionic/react";
import {
  Plugins,
  CameraResultType,
  CameraSource
  // CameraSource,
  // CameraPhoto,
  // Capacitor,
  // FilesystemDirectory,
} from "@capacitor/core";
// import serviceS3 from "../serviceS3";
// import serviceEcobin from "../serviceEcobin";

const { Camera } = Plugins; // Desktop

export function usePhotoGallery() {
  const takePhoto = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });
      return image;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  return {
    takePhoto,
  };
}
