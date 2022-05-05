import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { ArbitroDetail } from './ArbitroDetail';

@Injectable({
  providedIn: 'root'
})
export class ArbitroService {

  private apiUrl: string = environment.baseUrl + "/api/arbitros"
constructor(private http: HttpClient) { }

getArbitros(): Observable<ArbitroDetail[]> {
  return this.http
  .get<ArbitroDetail[]>(this.apiUrl)
  .pipe(
    catchError((err) => throwError(() => new Error("Error en el servicio")))
    )
  }
}
