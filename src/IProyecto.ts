export default interface IProyecto {
  id: Number;
  titulo: String;
  descripcion: String;
  dificultad: number;
  materiales: [
    {
      id: Number;
      nombre: String;
      TipoInformacion: {
        info_id: Number;
        material_id: Number;
      };
    }
  ];
}
