import { Arbitro } from "../Arbitro/Arbitro";
import { Partido } from "./Partido";
import { Equipo } from "../Equipo/Equipo";
import { Jugador } from "../Jugador/Jugador";

export class PartidoDetail extends Partido{
  juecesLinea : Array<Arbitro> = [];
  jugadores : Array<Jugador> = [];
  equipos : Array<Equipo> = [];
  constructor(
    id :number,
    ciudad : string,
    fecha : Date,
    estadio : string,
    tipoPartido : string,
    juecesLinea : Array<Arbitro>,
    jugadores : Array<Jugador>,
    equipos : Array<Equipo>,
  ) {
    super(id, ciudad, fecha, estadio, tipoPartido);
    this.juecesLinea = juecesLinea;
    this.jugadores = jugadores;
    this.equipos = equipos;
  }
}
