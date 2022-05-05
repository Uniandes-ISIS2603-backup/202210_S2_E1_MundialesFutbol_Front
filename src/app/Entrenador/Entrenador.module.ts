import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrenadorListComponent } from './Entrenador-list/Entrenador-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [EntrenadorListComponent],
 declarations: [EntrenadorListComponent]
})
export class EntrenadorModule { }
