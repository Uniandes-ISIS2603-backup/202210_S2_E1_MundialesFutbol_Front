import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArbitroListComponent } from './Arbitro-list/Arbitro-list.component';
import { ArbitroDetailComponent } from './Arbitro-detail/Arbitro-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArbitroListComponent, ArbitroDetailComponent],
  exports : [ArbitroListComponent]
})
export class ArbitroModule { }
