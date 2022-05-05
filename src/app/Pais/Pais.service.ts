import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { PaisDetail  } from './PaisDetail';

@Injectable({
  providedIn: 'root'
})


export class PaisService {
  private apiUrl: string = environment.baseUrl + 'paises'

  constructor(private http: HttpClient) {}

  getPaises(): Observable<PaisDetail[]> {
    return this.http
      .get<PaisDetail[]>(this.apiUrl)
      .pipe(
        catchError((err) => throwError(() => new Error('error en el servicio')))
      );
  }

  getPais(id: string): Observable<PaisDetail> {
    return this.http.get<PaisDetail>(this.apiUrl + '/' + id);
  }

  createPais(pais: PaisDetail): Observable<PaisDetail> {
    return this.http.post<PaisDetail>(this.apiUrl, pais);
  }

}
