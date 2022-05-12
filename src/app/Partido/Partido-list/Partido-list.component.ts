import { Component, OnInit } from '@angular/core';
import { PartidoService } from '../Partido.service';
import { PartidoDetail } from '../PartidoDetail';

@Component({
  selector: 'app-Partido-list',
  templateUrl: './Partido-list.component.html',
  styleUrls: ['./Partido-list.component.css']
})
export class PartidoListComponent implements OnInit {

  partidos: Array<PartidoDetail> = [];
  selectedPartido!: PartidoDetail;
  selected = false;
  constructor(private partidoService: PartidoService) { }

  getPartidos(): void {
    this.partidoService.getPartidos().subscribe((partidos) => {
      this.partidos = partidos;
    });
  }

  onSelected(partido: PartidoDetail): void {
    this.selected = true;
    this.selectedPartido = partido;
  }

  ngOnInit() {
    this.getPartidos();
  }
}
