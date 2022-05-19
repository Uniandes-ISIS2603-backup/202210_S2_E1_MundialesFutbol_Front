import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GolesListComponent } from './Goles-list/Goles-list.component';


const routes: Routes = [{
 path: 'goles',
 children: [
   {
     path: 'list',
     component: GolesListComponent
   }
 ]
}];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class GolesRoutingModule { }
