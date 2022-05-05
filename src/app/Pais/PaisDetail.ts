import { Mundial } from '../Mundial/Mundial';
import { Equipo } from '../Equipo/Equipo';
import { Arbitro } from '../Arbitro/Arbitro';
import { Pais } from './Pais';

export class PaisDetail extends Pais{
  mundiales: Array<Mundial> = [];
  arbitros: Array<Arbitro> = [];
  equipos: Array<Equipo> = [];

  constructor(
    id:number,
    nombre:string,
    imgBandera:string,
    mundiales: Array<Mundial>,
    arbitros: Array<Arbitro>,
    equipos: Array<Equipo>
  ){
    super(id,nombre,imgBandera);
    this.mundiales=mundiales;
    this.arbitros=arbitros;
    this.equipos=equipos
  }
}
