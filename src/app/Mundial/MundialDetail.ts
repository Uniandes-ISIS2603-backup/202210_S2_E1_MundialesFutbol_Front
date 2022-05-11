import {Equipo} from '../Equipo/Equipo';
import { Pais } from '../Pais/Pais';
import { Mundial } from './Mundial';
import { Arbitro } from '../Arbitro/Arbitro';
import { Partido } from '../Partido/Partido';
export class MundialDetail extends Mundial {
  equipos : Array<Equipo> = [];
  paises : Array<Pais> = [];
  arbitros : Array<Arbitro> = [];
  partidos : Array<Partido> = [];
  constructor(
    id :number,
    nombreMascota : string,
    anio : number,
    fechainicio : Date,
    imgMascota : string,
    mundial : string,
    equipos : Array<Equipo>,
    paises : Array<Pais>,
    arbitros : Array<Arbitro>,
    partidos : Array<Partido>,
  ) {
    super(id, nombreMascota, anio, fechainicio, imgMascota, mundial);
    this.equipos = equipos;
    this.paises = paises;
    this.arbitros = arbitros;
    this.partidos = partidos;
  }
}
