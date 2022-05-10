import { Component, Input, OnInit } from '@angular/core';
import { Arbitro } from '../Arbitro';
import { ArbitroDetail } from '../ArbitroDetail';

@Component({
  selector: 'app-Arbitro-detail',
  templateUrl: './Arbitro-detail.component.html',
  styleUrls: ['./Arbitro-detail.component.css']
})
export class ArbitroDetailComponent implements OnInit {

  @Input() arbitroDetail!: ArbitroDetail;
  constructor() { }

  ngOnInit() {
  }

}
