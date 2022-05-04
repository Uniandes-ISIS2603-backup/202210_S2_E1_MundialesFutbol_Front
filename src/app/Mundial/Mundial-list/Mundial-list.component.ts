import { Component, OnInit } from '@angular/core';
import { Mundial } from '../Mundial';
import { MundialDetail } from '../MundialDetail';
import{ MundialService } from '../Mundial.service';

@Component({
  selector: 'app-Mundial-list',
  templateUrl: './Mundial-list.component.html',
  styleUrls: ['./Mundial-list.component.css']
})
export class MundialListComponent implements OnInit {
  mundiales: Array<MundialDetail> = [];

  constructor(private mundialService: MundialService) { }

  getMundiales(): void {
    this.mundialService.getMundiales().subscribe(
      {next: mundiales => this.mundiales = mundiales, error: e => console.error(e,"Error en el servicio")});
  }

  ngOnInit() {
    this.getMundiales();
  }

}
