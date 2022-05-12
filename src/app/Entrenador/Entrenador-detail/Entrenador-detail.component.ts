import { Component, Input, OnInit } from '@angular/core';
import { EntrenadorDetail } from '../EntrenadorDetail';

@Component({
  selector: 'app-Entrenador-detail',
  templateUrl: './Entrenador-detail.component.html',
  styleUrls: ['./Entrenador-detail.component.css']
})
export class EntrenadorDetailComponent implements OnInit {

  @Input() entrenadorDetail! : EntrenadorDetail;
  Entrenador: EntrenadorDetail | undefined;
  constructor() { }

  ngOnInit() {
  }

}
