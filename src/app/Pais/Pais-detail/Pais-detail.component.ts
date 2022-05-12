import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../Pais';
import { PaisDetail } from '../PaisDetail';

@Component({
  selector: 'app-Pais-detail',
  templateUrl: './Pais-detail.component.html',
  styleUrls: ['./Pais-detail.component.css']
})
export class PaisDetailComponent implements OnInit {


 @Input() paisDetail!: PaisDetail;

  constructor() { }

  ngOnInit() {
  }

}
