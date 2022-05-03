import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoListComponent } from './Equipo-list/Equipo-list.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EquipoListComponent],
  exports : [EquipoListComponent]
})
export class EquipoModule { }
