import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartidoService } from '../Partido.service';
import { PartidoDetail } from '../PartidoDetail';

@Component({
  selector: 'app-Partido-detail',
  templateUrl: './Partido-detail.component.html',
  styleUrls: ['./Partido-detail.component.css']
})
export class PartidoDetailComponent implements OnInit {

  partidoId! : string;
  @Input() partidoDetail!: PartidoDetail;

  constructor(
    private route: ActivatedRoute,
    private partidoService: PartidoService) { }

    getPartido(){
      this.partidoService.getPartido(this.partidoId).subscribe(partido=>{
        this.partidoDetail = partido;
      })
    }

  ngOnInit() {
    if(this.partidoDetail === undefined){
      this.partidoId = this.route.snapshot.paramMap.get('id')!
      if (this.partidoId) {
        this.getPartido();
      }
    }
  }
}
