import { Component, OnInit } from '@angular/core';

import { Pais } from '../Pais';

import { PaisService } from '../Pais.service';

@Component({
  selector: 'app-Pais-list',
  templateUrl: './Pais-list.component.html',
  styleUrls: ['./Pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  paises: Array<Pais> = [];

  constructor(private paisService : PaisService ) { }

  getPaises(): void {
    this.paisService.getPaises().subscribe((paises) =>{
      this.paises = paises;
    })
  }

  ngOnInit() {
    this.getPaises();
  }

}
