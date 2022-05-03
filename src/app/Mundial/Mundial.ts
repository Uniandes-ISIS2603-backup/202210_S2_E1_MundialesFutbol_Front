export class Mundial {
  id :number;
  nombreMascota : string;
  anio : number;
  fechainicio : Date;
  imgMascota : string;
  constructor(
    id :number,
    nombreMascota : string,
    anio : number,
    fechainicio : Date,
    imgMascota : string,
  ) {
    this.id = id;
    this.nombreMascota = nombreMascota;
    this.anio = anio;
    this.fechainicio = fechainicio;
    this.imgMascota = imgMascota;
  }
}

