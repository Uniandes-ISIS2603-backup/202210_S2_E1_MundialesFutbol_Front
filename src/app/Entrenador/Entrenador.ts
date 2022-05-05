export class Entrenador {
  id : number;
  nombre : string;
  imgEntrenador : string;
  biografia : string;
  constructor(id: number, nombre: string, imgEntrenador: string, biografia: string) {
    this.id = id;
    this.nombre = nombre;
    this.imgEntrenador = imgEntrenador;
    this.biografia = biografia;
  }
}
