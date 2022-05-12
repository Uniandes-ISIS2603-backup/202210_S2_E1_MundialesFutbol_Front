import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { MundialDetail } from './MundialDetail';
import { EquipoDetail } from '../Equipo/EquipoDetail';
@Injectable({
  providedIn: 'root'
})
export class MundialService {
  private apiUrl: string = environment.baseUrl + "/api/mundiales"

  constructor(private http: HttpClient) { }

  getMundiales(): Observable<MundialDetail[]> {
    return this.http
    .get<MundialDetail[]>(this.apiUrl)
    .pipe(
      catchError((err) => throwError(() => new Error("Error en el servicio")))
    )
  }

  getEquipos(id:number): Observable<EquipoDetail[]> {
    return this.http
    .get<EquipoDetail[]>(this.apiUrl+"/"+id+"/equipos")
    .pipe(
      catchError((err) => throwError(() => new Error("Error en el servicio")))
    );
  }


}
