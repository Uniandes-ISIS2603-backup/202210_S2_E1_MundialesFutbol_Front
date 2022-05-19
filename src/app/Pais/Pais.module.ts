import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisListComponent } from './Pais-list/Pais-list.component';
import { PaisDetailComponent } from './Pais-detail/Pais-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PaisListComponent],
  declarations: [PaisListComponent, PaisDetailComponent]
})
export class PaisModule { }
