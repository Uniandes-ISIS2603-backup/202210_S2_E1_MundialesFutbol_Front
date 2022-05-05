import { Component, OnInit } from '@angular/core';
import { Jugador } from '../Jugador';
import { JugadorService } from '../Jugador.service';

@Component({
  selector: 'app-Jugadores-list',
  templateUrl: './Jugadores-list.component.html',
  styleUrls: ['./Jugadores-list.component.css']
})
export class JugadorListComponent implements OnInit {

  Jugador: Array<Jugador> = [];

  constructor(private JugadorService: JugadorService) { }

  getJugador(): void {
    this.JugadorService.getJugador().subscribe((Jugador) => {
      this.Jugador = Jugador;
    });
  }

  ngOnInit() {
    this.getJugador();
  }

}
