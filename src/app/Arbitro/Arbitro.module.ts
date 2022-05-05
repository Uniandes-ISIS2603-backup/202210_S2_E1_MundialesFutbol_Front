import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArbitroListComponent } from './Arbitro-list/Arbitro-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArbitroListComponent],
  exports : [ArbitroListComponent]
})
export class ArbitroModule { }
