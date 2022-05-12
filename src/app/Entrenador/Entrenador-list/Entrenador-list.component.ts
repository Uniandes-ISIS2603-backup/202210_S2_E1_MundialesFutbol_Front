import { Component, OnInit } from '@angular/core';
import { Entrenador } from '../Entrenador';
import { EntrenadorService } from '../Entrenador.service';
import { EntrenadorDetail } from '../EntrenadorDetail';

@Component({
  selector: 'app-Entrenadores-list',
  templateUrl: './Entrenador-list.component.html',
  styleUrls: ['./Entrenador-list.component.css']
})
export class EntrenadorListComponent implements OnInit {

  Entrenador: Array<Entrenador> = [];
  selectedEntrenador!: EntrenadorDetail;
  selected = false;
  constructor(private EntrenadorService: EntrenadorService) { }

  getEntrenador(): void {
    this.EntrenadorService.getEntrenador().subscribe((Entrenador) => {
      this.Entrenador = Entrenador;
    });
  }

  onSelected(Entrenador: EntrenadorDetail): void {
    this.selected = true;
    this.selectedEntrenador = Entrenador;
  }

  ngOnInit() {
    this.getEntrenador();
  }

}
