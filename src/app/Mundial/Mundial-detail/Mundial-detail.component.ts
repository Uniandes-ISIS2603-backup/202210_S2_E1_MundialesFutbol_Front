import { Component, Input, OnInit } from '@angular/core';
import { MundialService } from '../Mundial.service';
import { MundialDetail } from '../MundialDetail';

@Component({
  selector: 'app-Mundial-detail',
  templateUrl: './Mundial-detail.component.html',
  styleUrls: ['./Mundial-detail.component.css']
})
export class MundialDetailComponent implements OnInit {


  @Input() mundial!: MundialDetail;


  constructor(private mundialService: MundialService) {
  }

  ngOnInit() {
  }
}
