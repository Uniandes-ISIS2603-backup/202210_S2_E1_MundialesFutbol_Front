import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { EquipoDetail } from './EquipoDetail';
@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private apiUrl: string = environment.baseUrl + "/api/mundiales/equipos"

  constructor(private http: HttpClient) { }

  getEquipos(): Observable<EquipoDetail[]> {
    return this.http
    .get<EquipoDetail[]>(this.apiUrl)
    .pipe(
      catchError((err) => throwError(() => new Error("Error en el servicio")))
    )
  }


}
