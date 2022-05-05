import { Component, OnInit } from '@angular/core';
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

  getArbitros(): void {
    this.arbitroService.getArbitros().subscribe((arbitros) => {
      this.arbitros = arbitros;
    });
  }

  ngOnInit() {
    this.getArbitros();
  }
}
