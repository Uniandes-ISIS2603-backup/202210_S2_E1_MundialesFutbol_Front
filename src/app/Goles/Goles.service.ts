import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Goles } from './Goles.ts';


@Injectable({
  providedIn: 'root'
})
export class GolesService {

  private apiUrl: string = environment.baseUrl + 'goles';

  constructor(private http: HttpClient) { }

  getGoles(): Observable<Goles[]>{
    return this.http.get<Goles[]>(this.apiUrl)
  }

}
