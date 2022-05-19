import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoListComponent } from './Partido-list/Partido-list.component';
import { PartidoDetailComponent } from './Partido-detail/Partido-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PartidoListComponent, PartidoDetailComponent],
  exports : [PartidoListComponent]
})
export class PartidoModule { }
