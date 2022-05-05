export class Jugador {
  id : number;
  nombre: string;
  numeroCamisa: number;
  edad: number;
  foto: string;
  fechaNacimiento: Date;
  ligaActual: string;
  equipoActual: string;
  posicion: string;
  constructor(id: number, nombre: string, numeroCamisa: number, edad: number, foto: string, fechaNacimiento: Date, ligaActual: string, equipoActual: string, posicion: string) {
    this.id = id;
    this.nombre = nombre;
    this.numeroCamisa = numeroCamisa;
    this.edad = edad;
    this.foto = foto;
    this.fechaNacimiento = fechaNacimiento;
    this.ligaActual = ligaActual;
    this.equipoActual = equipoActual;
    this.posicion = posicion;
  }
}
