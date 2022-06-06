import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrenadorListComponent } from './Entrenador-list/Entrenador-list.component';
import { EntrenadorDetailComponent } from './Entrenador-detail/Entrenador-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [EntrenadorListComponent],
 declarations: [EntrenadorListComponent, EntrenadorDetailComponent]
})
export class EntrenadorModule { }
