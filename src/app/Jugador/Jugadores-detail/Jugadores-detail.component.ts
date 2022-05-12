import { Component, Input, OnInit } from '@angular/core';
import { JugadorService } from '../Jugador.service';
import { JugadorDetail } from '../JugadorDetail';

@Component({
  selector: 'app-Jugadores-detail',
  templateUrl: './Jugadores-detail.component.html',
  styleUrls: ['./Jugadores-detail.component.css']
})
export class JugadorDetailComponent implements OnInit {

  @Input() jugadorDetail!: JugadorDetail;

  constructor(private jugadorService: JugadorService) { }

  ngOnInit() {
  }
}
