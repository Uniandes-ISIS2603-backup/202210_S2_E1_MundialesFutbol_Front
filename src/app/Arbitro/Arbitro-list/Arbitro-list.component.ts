import { Component, OnInit } from '@angular/core';
import { Arbitro } from '../Arbitro';
import { ArbitroService } from '../Arbitro.service';
import { ArbitroDetail } from '../ArbitroDetail';

@Component({
  selector: 'app-Arbitro-list',
  templateUrl: './Arbitro-list.component.html',
  styleUrls: ['./Arbitro-list.component.css']
})
export class ArbitroListComponent implements OnInit {

  arbitros: Array<ArbitroDetail> = [];
  constructor(private arbitroService: ArbitroService) { }

  getArbitro(): void {
    this.arbitroService.getArbitro().subscribe((arbitros) => {
      this.arbitros = arbitros;
    });
  }

  ngOnInit() {
    this.getArbitro();
  }

}
