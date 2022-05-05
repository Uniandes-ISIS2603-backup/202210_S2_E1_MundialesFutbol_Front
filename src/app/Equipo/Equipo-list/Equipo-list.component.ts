import { Component, OnInit } from '@angular/core';
import { EquipoDetail } from '../EquipoDetail';
import { EquipoService } from '../Equipo.service';

@Component({
  selector: 'app-Equipo-list',
  templateUrl: './Equipo-list.component.html',
  styleUrls: ['./Equipo-list.component.css']
})
export class EquipoListComponent implements OnInit {
  equipos: Array<EquipoDetail> = [];

  constructor(private equipoService: EquipoService) { }

  getEquipos(): void{
    this.equipoService.getEquipos().subscribe(
      {next: equipos => this.equipos = equipos, error: e => console.error(e)});
  }
  ngOnInit() {
    this.getEquipos();
  }

}
