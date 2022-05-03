import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MundialListComponent } from './Mundial-list/Mundial-list.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MundialListComponent],
  exports : [MundialListComponent]
})
export class MundialModule { }
