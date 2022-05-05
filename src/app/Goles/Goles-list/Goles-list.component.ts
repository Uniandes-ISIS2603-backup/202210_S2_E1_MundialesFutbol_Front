import { Component, OnInit } from '@angular/core';
import { Goles } from '../Goles.ts';

@Component({
  selector: 'app-Goles-list',
  templateUrl: './Goles-list.component.html',
  styleUrls: ['./Goles-list.component.css']
})
export class GolesListComponent implements OnInit {

  goles: Array<Goles> = [];
  constructor() { }

  ngOnInit() {
  }

}
