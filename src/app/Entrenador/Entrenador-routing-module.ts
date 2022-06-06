import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrenadorListComponent } from './Entrenador-list/Entrenador-list.component';
import { EntrenadorDetailComponent } from './Entrenador-detail/Entrenador-detail.component';

const routes: Routes = [{
 path: 'entrenadores',
 children: [
   {
     path: 'list',
     component: EntrenadorListComponent
   },
   {
     path: ':id',
     component: EntrenadorDetailComponent
   },
 ]
}];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class EntrenadorRoutingModule { }
