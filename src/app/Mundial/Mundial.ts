

export class Mundial {
  id :number;
  nombreMascota : string;
  anio : number;
  fechainicio : Date;
  imgMascota : string;
  mundial : string;
  constructor(
    id :number,
    nombreMascota : string,
    anio : number,
    fechainicio : Date,
    imgMascota : string,
    mundial : string
  ) {
    this.id = id;
    this.nombreMascota = nombreMascota;
    this.anio = anio;
    this.fechainicio = fechainicio;
    this.imgMascota = imgMascota;
    this.mundial = mundial;
  }
}

