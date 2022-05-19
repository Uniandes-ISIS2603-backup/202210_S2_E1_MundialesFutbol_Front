import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MundialListComponent } from './Mundial-list/Mundial-list.component';
import { MundialDetailComponent } from './Mundial-detail/Mundial-detail.component';
import { MundialRoutingModule } from './Mundial-routing-module';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MundialListComponent, MundialDetailComponent],
  exports : [MundialListComponent, MundialDetailComponent, MundialRoutingModule]
})
export class MundialModule { }
