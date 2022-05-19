import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartidoListComponent } from './Partido-list/Partido-list.component';
import { PartidoDetailComponent } from './Partido-detail/Partido-detail.component';

const routes: Routes = [{
 path: 'partidos',
 children: [
   {
     path: 'list',
     component: PartidoListComponent
   },
   {
     path: ':id',
     component: PartidoDetailComponent
   },
 ]
}];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class PartidoRoutingModule { }
