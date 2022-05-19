import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArbitroService } from '../Arbitro.service';
import { ArbitroDetail } from '../ArbitroDetail';

@Component({
  selector: 'app-Arbitro-detail',
  templateUrl: './Arbitro-detail.component.html',
  styleUrls: ['./Arbitro-detail.component.css']
})
export class ArbitroDetailComponent implements OnInit {

  arbitroId!: string;
  @Input() arbitroDetail!: ArbitroDetail;
  constructor(
    private route: ActivatedRoute,
    private arbitroService: ArbitroService) { }

    getArbitro(){
      this.arbitroService.getArbitro(this.arbitroId).subscribe(arbitro=>{
        this.arbitroDetail = arbitro;
      })
    }
  ngOnInit() {
    if(this.arbitroDetail === undefined){
      this.arbitroId = this.route.snapshot.paramMap.get('id')!
      if (this.arbitroId) {
        this.getArbitro();
      }
    }
  }
}
