import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { JugadorDetail } from './JugadorDetail';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  private apiUrl: string = environment.baseUrl + "/api/jugadores"
constructor(private http: HttpClient) { }

getJugador(): Observable<JugadorDetail[]> {
  return this.http
  .get<JugadorDetail[]>(this.apiUrl)
  .pipe(
    catchError((err) => throwError(() => new Error("Error en el servicio")))
    )
  }
}
