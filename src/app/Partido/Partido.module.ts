import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoListComponent } from './Partido-list/Partido-list.component';
import { PartidoDetailComponent } from './Partido-detail/Partido-detail.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './Partido-pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [PartidoListComponent, PartidoDetailComponent, FilterPipe],
  exports : [PartidoListComponent]
})
export class PartidoModule { }
