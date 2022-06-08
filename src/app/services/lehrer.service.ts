import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Lehrer } from '../Models/lehrer';

@Injectable({
  providedIn: 'root'
})
export class LehrerService {
  constructor(private http: HttpClient) { }
 
  /*
  * Ein Observable ist ein Beobachter von Daten --> Die Methode returned also einen Stream der als Beobachter fungiert
  * welcher die Daten beinhaltet welche wir suchen. Dabei werden die Daten nach und nach geladen. Also quasi was der Beobachter
  * mit der Zeit beobachtet.
  */
  getAllLehrer(): Observable<Lehrer[]> {  
    return this.http.get<Lehrer[]>('http://localhost:8081/lehrer');
  }
}
