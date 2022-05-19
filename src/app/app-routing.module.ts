import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbitroListComponent } from './Arbitro/Arbitro-list/Arbitro-list.component';
import { GolesListComponent } from './Goles/Goles-list/Goles-list.component';
import { PartidoListComponent } from './Partido/Partido-list/Partido-list.component';
import { JugadorListComponent } from './Jugador/Jugadores-list/Jugadores-list.component';

const routes: Routes = [
  { path: '', component: ArbitroListComponent },
  { path: '', component: PartidoListComponent },
  { path: '', component: JugadorListComponent },
  { path: '', component: GolesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
