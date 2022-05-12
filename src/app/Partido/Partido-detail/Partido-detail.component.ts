import { Component, Input, OnInit } from '@angular/core';
import { PartidoService } from '../Partido.service';
import { PartidoDetail } from '../PartidoDetail';

@Component({
  selector: 'app-Partido-detail',
  templateUrl: './Partido-detail.component.html',
  styleUrls: ['./Partido-detail.component.css']
})
export class PartidoDetailComponent implements OnInit {

  @Input() partidoDetail!: PartidoDetail;

  constructor(private partidoService: PartidoService) { }

  ngOnInit() {
  }

}
