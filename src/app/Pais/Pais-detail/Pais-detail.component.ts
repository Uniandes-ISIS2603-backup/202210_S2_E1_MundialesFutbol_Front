import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pais } from '../Pais';
import { PaisService } from '../Pais.service';
import { PaisDetail } from '../PaisDetail';

@Component({
  selector: 'app-Pais-detail',
  templateUrl: './Pais-detail.component.html',
  styleUrls: ['./Pais-detail.component.css']
})
export class PaisDetailComponent implements OnInit {

 paisId!: string;
 @Input() paisDetail!: PaisDetail;

  constructor(
    private route: ActivatedRoute,
    private paisService: PaisService
  ) { }

  getPais(){
    this.paisService.getPais(this.paisId).subscribe(pais=>{
      this.paisDetail = pais;
    })
  }

  ngOnInit() {
    if(this.paisDetail === undefined){
      this.paisId = this.route.snapshot.paramMap.get('id')!
      if (this.paisId) {
        this.getPais();
      }
    }
  }

}
