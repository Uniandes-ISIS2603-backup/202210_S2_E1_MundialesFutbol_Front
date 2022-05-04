import { Component, OnInit } from '@angular/core';
import { Arbitro } from '../Arbitro';

@Component({
  selector: 'app-Arbitro-list',
  templateUrl: './Arbitro-list.component.html',
  styleUrls: ['./Arbitro-list.component.css']
})
export class ArbitroListComponent implements OnInit {

  arbitros: Array<Arbitro> = [];
  constructor() { }

  ngOnInit() {
  }

}
