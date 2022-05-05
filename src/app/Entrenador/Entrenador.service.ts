import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { EntrenadorDetail } from './EntrenadorDetail';

@Injectable({
  providedIn: 'root'
})

export class EntrenadorService {

  private apiUrl: string = environment.baseUrl + "/api/entrenador"
constructor(private http: HttpClient) { }

getArbitros(): Observable<EntrenadorDetail[]> {
  return this.http
  .get<EntrenadorDetail[]>(this.apiUrl)
  .pipe(
    catchError((err) => throwError(() => new Error("Error en el servicio")))
    )
  }
}
