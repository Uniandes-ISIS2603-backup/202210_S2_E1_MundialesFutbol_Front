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
  orden: number = 0;
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

  sortByName(): void {
    this.orden += 1;
    if (this.orden % 2 == 0) {
      this.arbitros.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else {
      this.arbitros.reverse();
    }
  }

  ngOnInit() {
    this.getArbitros();
  }
}
