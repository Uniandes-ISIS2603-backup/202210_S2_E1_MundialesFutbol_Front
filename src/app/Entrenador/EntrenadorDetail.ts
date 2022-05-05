import { Equipo } from "../Equipo/Equipo";
import { Entrenador } from "./Entrenador";

export class EntrenadorDetail extends Entrenador {
  equipos : Array<Equipo> = [];

  constructor(
    id :number,
    nombre : string,
    imagenEntrenador : string,
    biografia : string
  ) {
    super(id, nombre, imagenEntrenador, biografia);
  }
}
