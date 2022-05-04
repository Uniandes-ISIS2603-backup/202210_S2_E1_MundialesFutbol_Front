import { Pais } from "../Pais/Pais";

export class Arbitro {
  id : number;
  nombre : string;
  imagenArbitro : string;
  nacionalidad : Pais;

  constructor(id: number, nombre: string, imagenArbitro: string, nacionalidad: Pais) {
    this.id = id;
    this.nombre = nombre;
    this.imagenArbitro = imagenArbitro;
    this.nacionalidad = nacionalidad;
  }
}
