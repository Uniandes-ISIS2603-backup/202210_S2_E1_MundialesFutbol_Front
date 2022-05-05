import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisListComponent } from './Pais-list/Pais-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [PaisListComponent],
  declarations: [PaisListComponent]
})
export class PaisModule { }
