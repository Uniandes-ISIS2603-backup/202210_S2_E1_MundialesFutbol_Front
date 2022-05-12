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
  selectedArbitro!: ArbitroDetail;
  selected = false;
  constructor(private arbitroService: ArbitroService) { }

  getArbitros(): void {
    this.arbitroService.getArbitros().subscribe((arbitros) => {
      this.arbitros = arbitros;
    });
  }

  onSelected(arbitro: ArbitroDetail): void {
    this.selected = true;
    this.selectedArbitro = arbitro;
  }

  ngOnInit() {
    this.getArbitros();
  }
}
