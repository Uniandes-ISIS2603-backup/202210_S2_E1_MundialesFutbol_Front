import { Component, OnInit } from '@angular/core';
import { EntrenadorService } from '../Entrenador.service';
import { EntrenadorDetail } from '../EntrenadorDetail';

@Component({
  selector: 'app-Entrenadores-list',
  templateUrl: './Entrenador-list.component.html',
  styleUrls: ['./Entrenador-list.component.css']
})
export class EntrenadorListComponent implements OnInit {

  Entrenadores: Array<EntrenadorDetail> = [];
  selectedEntrenador!: EntrenadorDetail;
  selected = false;
  constructor(private EntrenadorService: EntrenadorService) { }

  getEntrenador(): void {
    this.EntrenadorService.getEntrenadores().subscribe((Entrenadores) => {
      this.Entrenadores = Entrenadores;
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
