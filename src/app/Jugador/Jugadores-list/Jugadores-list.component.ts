import { Component, OnInit } from '@angular/core';
import { Jugador } from '../Jugador';
import { JugadorService } from '../Jugador.service';
import { JugadorDetail } from '../JugadorDetail';

@Component({
  selector: 'app-Jugadores-list',
  templateUrl: './Jugadores-list.component.html',
  styleUrls: ['./Jugadores-list.component.css']
})
export class JugadorListComponent implements OnInit {

  Jugador: Array<Jugador> = [];
  selectedJugador!: JugadorDetail;
  selected = false;
  constructor(private JugadorService: JugadorService) { }

  getJugador(): void {
    this.JugadorService.getJugador().subscribe((Jugador) => {
      this.Jugador = Jugador;
    });
  }

  onSelected(Jugador: JugadorDetail): void {
    this.selected = true;
    this.selectedJugador = Jugador;
  }

  ngOnInit() {
    this.getJugador();
  }

}
