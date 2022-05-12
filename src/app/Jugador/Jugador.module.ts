import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadorListComponent } from './Jugadores-list/Jugadores-list.component';
import { JugadorDetailComponent } from './Jugadores-detail/Jugadores-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JugadorListComponent, JugadorDetailComponent],
  exports : [JugadorListComponent]
})
export class PartidoModule { }
