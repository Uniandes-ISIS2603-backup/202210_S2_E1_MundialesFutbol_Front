import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MundialListComponent } from './Mundial-list/Mundial-list.component';

const routes: Routes = [
  {
    path: 'mundiales',
    children: [
      {path: 'list', component: MundialListComponent}]
  }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]})

export class MundialRoutingModule { };
