import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GolesListComponent } from './Goles-list/Goles-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [GolesListComponent],
  declarations: [GolesListComponent]
})
export class GolesModule { }
