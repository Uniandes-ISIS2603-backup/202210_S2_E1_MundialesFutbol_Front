import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisModule } from './Pais/Pais.module';
import { EquipoModule } from './Equipo/Equipo.module';
import { MundialModule } from './Mundial/Mundial.module';
import { HttpClientModule } from '@angular/common/http';
import { ArbitroModule } from './Arbitro/Arbitro.module';
import { EntrenadorModule } from './Entrenador/Entrenador.module';
import { PartidoModule } from './Partido/Partido.module';
import { JugadorModule } from './Jugador/Jugador.module';
import { GolesModule } from './Goles/Goles.module';
import { ArbitroRoutingModule } from './Arbitro/Arbitro-routing-module';
import { PartidoRoutingModule } from './Partido/Partido-routing-module';
import { JugadorRoutingModule } from './Jugador/Jugador-routing-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaisModule,
    EquipoModule,
    MundialModule,
    ArbitroModule,
    EntrenadorModule,
    PartidoModule,
    JugadorModule,
    GolesModule,
    ArbitroRoutingModule,
    PartidoRoutingModule,
    JugadorRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
