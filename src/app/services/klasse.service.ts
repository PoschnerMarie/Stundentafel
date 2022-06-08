import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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

  updateKlassenlehrer(klasse: Klasse) {
    console.log(klasse);
    const body = JSON.stringify(klasse);
    console.log("json:")
    console.log(body);

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post('http://localhost:8081/addklassenlehrer', body, {headers: headers}).subscribe(x=>console.log(x));
  }
}
