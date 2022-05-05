import { Partido } from "../Partido/Partido";
import { Equipo } from "../Equipo/Equipo";
import { Jugador } from "./Jugador";

export class JugadorDetail extends Jugador{
  partido : Array<Partido> = [];
  equipos : Array<Equipo> = [];
  constructor(
    id : number,
    nombre: string,
    numeroCamisa: number,
    edad: number,
    foto: string,
    fechaNacimiento: Date,
    ligaActual: string,
    equipoActual: string,
    posicion: string,
    partido : Array<Partido>,
    equipos : Array<Equipo>,
  ) {
    super(id, nombre,numeroCamisa,edad,foto,fechaNacimiento,ligaActual,equipoActual,posicion);
    this.partido = partido;
    this.equipos = equipos;
  }
}
