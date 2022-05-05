import { Component, OnInit } from '@angular/core';
import { Goles } from '../Goles.ts';
import { GolesService } from '../Goles.service';

@Component({
  selector: 'app-Goles-list',
  templateUrl: './Goles-list.component.html',
  styleUrls: ['./Goles-list.component.css']
})
export class GolesListComponent implements OnInit {

  goles: Array<Goles> = [];

  constructor(private golesService: GolesService) { }

  getGoles(): void{
    this.golesService.getGoles().subscribe((goles) => {
      this.goles = goles;
    });
  }

  ngOnInit() {
    this.getGoles();
  }

}
