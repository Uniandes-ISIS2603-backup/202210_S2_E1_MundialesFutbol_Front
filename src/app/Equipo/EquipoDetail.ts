import { Equipo } from "./Equipo";
import { Pais } from "../Pais/Pais";
import { Mundial } from "./Mundial";

export class EquipoDetail extends Equipo{
  jugadores : Array<Jugador> = [];
  partidosLocal : Array<Partido> = [];
  partidosVisitante : Array<Partido> = [];
  constructor(
    id :number,
    anio : number,
    imgEscudo : string,
    grupo : string,
    pais : Pais,
    entrenador : Entrenador,
    mundial : Mundial,
    jugadores : Array<Jugador>,
    partidosLocal : Array<Partido>,
    partidosVisitante : Array<Partido>,
  ) {
    super(id, anio, imgEscudo, grupo, pais, entrenador, mundial);
    this.jugadores = jugadores;
    this.partidosLocal = partidosLocal;
    this.partidosVisitante = partidosVisitante;
  }
}
