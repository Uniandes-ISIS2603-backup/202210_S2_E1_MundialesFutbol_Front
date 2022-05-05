import { Component, OnInit } from '@angular/core';
import { Entrenador } from '../Entrenador';
import { EntrenadorService } from '../Entrenador.service';


@Component({
  selector: 'app-Entrenadores-list',
  templateUrl: './Entrenador-list.component.html',
  styleUrls: ['./Entrenador-list.component.css']
})
export class EntrenadorListComponent implements OnInit {

  Entrenador: Array<Entrenador> = [];

  constructor(private EntrenadorService: EntrenadorService) { }

  getEntrenador(): void {
    this.EntrenadorService.getEntrenador().subscribe((Entrenador) => {
      this.Entrenador = Entrenador;
    });
  }

  ngOnInit() {
    this.getEntrenador();
  }

}
