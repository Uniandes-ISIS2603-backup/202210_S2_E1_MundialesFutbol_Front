export class Partido {
  id : number;
  ciudad : string;
  fecha : Date;
  estadio : string;
  tipoPartido : string;
  constructor(id: number, ciudad: string, fecha: Date, estadio: string, tipoPartido: string) {
    this.id = id;
    this.ciudad = ciudad;
    this.fecha = fecha;
    this.estadio = estadio;
    this.tipoPartido = tipoPartido;
  }
}
