export default interface ICentro {
  id: Number;
  nombre: String;
  calle: String;
  numero: Number;
  municipio_id: Number;
  lat: String;
  lng: String;
  descripcion: String;
  horarios: [
    {
      id: Number;
      dia_semana: Number;
      hora_apertura: String;
      hora_cierre: String;
      centro_id: Number;
    }
  ];
  materiales: [
    {
      id: Number;
      nombre: String;
    }
  ];
}
