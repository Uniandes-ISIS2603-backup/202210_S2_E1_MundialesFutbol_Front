import { Component, OnInit } from '@angular/core';

import { Pais } from '../Pais';

import { PaisService } from '../Pais.service';
import { PaisDetail } from '../PaisDetail';

@Component({
  selector: 'app-Pais-list',
  templateUrl: './Pais-list.component.html',
  styleUrls: ['./Pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  paises: Array<PaisDetail> = [];
  selectedPais!: PaisDetail;
  selected =false;

  constructor(private paisService : PaisService ) { }

  getPaises(): void {
    this.paisService.getPaises().subscribe((paises) =>{
      this.paises = paises;
    })
  }

  onSelected(pais: PaisDetail): void {
    this.selected = true;
    this.selectedPais = pais;
  }

  ngOnInit() {
    this.getPaises();
  }

}
