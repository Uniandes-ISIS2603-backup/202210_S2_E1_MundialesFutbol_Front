import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoListComponent } from './Partido-list/Partido-list.component';
import { PartidoDetailComponent } from './Partido-detail/Partido-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PartidoListComponent, PartidoDetailComponent],
  exports : [PartidoListComponent]
})
export class PartidoModule { }
