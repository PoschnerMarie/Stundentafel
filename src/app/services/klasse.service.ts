/*
* Autoren:  Mirella Pluta, Marie Poschner
* Klasse:   FS191
* Datum:    09.06.2022
* Inhalt:   Datenbank Service für die Klassen. Enthält Methoden, die das Abfragen und Speichern von Klassenobjekten ermöglichen.
*/
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Klasse } from '../Models/klasse';

@Injectable({
  providedIn: 'root'
})
export class KlasseService {

  constructor(private httpClient: HttpClient) { }

  /*
  * Schickt einen http get Request an den Node Express Server.
  * Die Methode returned einen Stream der als Beobachter(Observable) fungiert.
  * Beinhaltet die Daten, die wir suchen. Dabei werden die Daten nach und nach geladen. 
  */
  getAllKlassen(): Observable<Klasse[]> {
    return this.httpClient.get<Klasse[]>('http://localhost:8081/klassen');
  }
  
  //schickt einen http post Request an den node Express Server und übergibt im Body ein JSON File (enhält Klassenobjekt)
  updateKlassenlehrer(klasse: Klasse) {
    const body = JSON.stringify(klasse);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post('http://localhost:8081/addklassenlehrer', body, {headers: headers}).subscribe(x=>console.log(x));
  }
}
