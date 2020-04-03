import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Pagination } from '../models/pagination';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Pagination> {
    return this.http.get<Pagination>(
      `${environment.baseUrl}/edge/characters`
    )
  }

  searchCharacters(): Observable<Pagination> {
    return this.http.get<Pagination>(
      `${environment.baseUrl}/edge/characters`
    )
  }

  pagination(url: string): Observable<Pagination> {
    return this.http.get<Pagination>(
      `${url}`
    )
  }

  search(name: string): Observable<Pagination> {
    return this.http.get<Pagination>(
      `${environment.baseUrl}/edge/characters?filter[name]=${name}`
    )
  }
}
