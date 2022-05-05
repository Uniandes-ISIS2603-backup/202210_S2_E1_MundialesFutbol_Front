import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { PartidoDetail } from './PartidoDetail';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  private apiUrl: string = environment.baseUrl + "/api/partidos"
constructor(private http: HttpClient) { }

getPartidos(): Observable<PartidoDetail[]> {
  return this.http
  .get<PartidoDetail[]>(this.apiUrl)
  .pipe(
    catchError((err) => throwError(() => new Error("Error en el servicio")))
    )
  }
}
