import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Klasse } from '../Models/klasse';

@Injectable({
  providedIn: 'root'
})
export class KlasseService {

  constructor(private httpClient: HttpClient) { }

  getAllKlassen(): Observable<Klasse[]> {
    return this.httpClient.get<Klasse[]>('http://localhost:8081/klassen');
  }
}
