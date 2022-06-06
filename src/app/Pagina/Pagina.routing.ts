import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './PaginaPrincipal/PaginaPrincipal.component';

const routes: Routes = [{
  path: 'paginaPrincipal',
  children: [
    {
      path: 'main',
      component: PaginaPrincipalComponent
    }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 })

export class PaginaRoutingModule { }
