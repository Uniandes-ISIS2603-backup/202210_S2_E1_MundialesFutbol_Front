import { Pais } from "../Pais/Pais";
import { Mundial } from "../Mundial/Mundial";
import { Partido } from "../Partido/Partido";
import { Arbitro } from "./Arbitro";

export class ArbitroDetail extends Arbitro {
  mundiales : Array<Mundial> = [];
  partidosLinea : Array<Partido> = [];
  partidosPrincipal : Array<Partido> = [];
  constructor(
    id :number,
    nombre : string,
    imagenArbitro : string,
    nacionalidad : Pais,
    mundiales : Array<Mundial>,
    partidosLinea : Array<Partido>,
    partidosPrincipal : Array<Partido>,
  ) {
    super(id, nombre, imagenArbitro, nacionalidad);
    this.mundiales = mundiales;
    this.partidosLinea = partidosLinea;
    this.partidosPrincipal = partidosPrincipal;
  }
}

