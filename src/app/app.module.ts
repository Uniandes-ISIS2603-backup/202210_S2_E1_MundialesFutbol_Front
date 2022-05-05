import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisModule } from './Pais/Pais.module';
import { EquipoModule } from './Equipo/Equipo.module';
import { MundialModule } from './Mundial/Mundial.module';
import { HttpClientModule } from '@angular/common/http';
import { ArbitroModule } from './Arbitro/Arbitro.module';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
