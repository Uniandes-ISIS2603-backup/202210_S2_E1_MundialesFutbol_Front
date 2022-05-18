import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbitroListComponent } from './Arbitro/Arbitro-list/Arbitro-list.component';
import { PartidoListComponent } from './Partido/Partido-list/Partido-list.component';

const routes: Routes = [
  { path: '', component: ArbitroListComponent },
  { path: '', component: PartidoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
