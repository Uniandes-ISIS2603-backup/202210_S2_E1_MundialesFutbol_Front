import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JugadorListComponent } from './Jugadores-list/Jugadores-list.component';
import { JugadorDetailComponent } from './Jugadores-detail/Jugadores-detail.component';

const routes: Routes = [{
 path: 'jugador',
 children: [
   {
     path: 'list',
     component: JugadorListComponent
   },
   {
     path: ':id',
     component: JugadorDetailComponent
   },
 ]
}];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class JugadorRoutingModule { }
