import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoListComponent } from './Partido-list/Partido-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PartidoListComponent],
  exports : [PartidoListComponent]
})
export class PartidoModule { }
