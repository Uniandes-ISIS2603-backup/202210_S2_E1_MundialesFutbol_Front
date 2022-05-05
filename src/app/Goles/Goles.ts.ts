import { Jugador } from "../Jugador/Jugador";
import { Partido } from "../Partido/Partido";

export class Goles {
  minuto : number;
  tipoDeGol: string;
  jugador : Jugador
  partido : Partido

  constructor(minuto: number, tipoDeGol: string, jugador: Jugador, partido: Partido){
    this.minuto = minuto;
    this.tipoDeGol = tipoDeGol;
    this.jugador = jugador;
    this.partido = partido;
  }
}
