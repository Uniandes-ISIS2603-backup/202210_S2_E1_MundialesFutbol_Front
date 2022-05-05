import { Mundial } from "../Mundial/Mundial";
import { Pais } from "../Pais/Pais";
import { Entrenador } from "../Entrenador/Entrenador";
export class Equipo {
  id :number;
  anio : number;
  imgEscudo : string;
  grupo : string;
  pais : Pais;
  entrenador : Entrenador;
  mundial : Mundial;

  constructor(
    id :number,
    anio : number,
    imgEscudo : string,
    grupo : string,
    pais : Pais,
    entrenador : Entrenador,
    mundial : Mundial,
  ) {
    this.id = id;
    this.anio = anio;
    this.imgEscudo = imgEscudo;
    this.grupo = grupo;
    this.pais = pais;
    this.entrenador = entrenador;
    this.mundial = mundial;
  }
}
