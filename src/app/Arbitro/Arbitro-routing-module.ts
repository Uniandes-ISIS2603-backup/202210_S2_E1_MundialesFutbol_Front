import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArbitroListComponent } from './Arbitro-list/Arbitro-list.component';
import { ArbitroDetailComponent } from './Arbitro-detail/Arbitro-detail.component';

const routes: Routes = [{
 path: 'arbitros',
 children: [
   {
     path: 'list',
     component: ArbitroListComponent
   },
   {
     path: ':id',
     component: ArbitroDetailComponent
   },
 ]
}];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class BookRoutingModule { }
