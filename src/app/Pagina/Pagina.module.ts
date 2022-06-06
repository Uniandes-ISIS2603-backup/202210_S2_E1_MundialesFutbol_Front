import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './PaginaPrincipal/PaginaPrincipal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PaginaPrincipalComponent],
  declarations: [PaginaPrincipalComponent]
})
export class PaginaModule { }
