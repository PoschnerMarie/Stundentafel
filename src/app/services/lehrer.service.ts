/*
* Autoren:  Mirella Pluta, Marie Poschner
* Klasse:   FS191
* Datum:    09.06.2022
* Inhalt:   Datenbank Service für die Lehrer. Enthält Methoden, die das Abfragen und Speichern von Lehrerobjekten ermöglichen.
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lehrer } from '../Models/lehrer';

@Injectable({
  providedIn: 'root'
})
export class LehrerService {
  constructor(private http: HttpClient) { }
 
  /*
  * Schickt einen http get Request an den Node Express Server.
  * Die Methode returned einen Stream der als Beobachter(Observable) fungiert.
  * Beinhaltet die Daten, die wir suchen. Dabei werden die Daten nach und nach geladen. 
  */
  getAllLehrer(): Observable<Lehrer[]> {  
    return this.http.get<Lehrer[]>('http://localhost:8081/lehrer');
  }
}
