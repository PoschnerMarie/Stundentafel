import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Lehrer {                                                       
  kuerzel: string,
  abwesenheitsnotiz: string,
  fortbildungs_ID: number
}

@Injectable({
  providedIn: 'root'
})
export class LehrerService {

  constructor(private httpClient: HttpClient) { }

  getAllLehrer(): Observable<Lehrer[]> {
    return this.httpClient.get<Lehrer[]>('http://localhost:8081/lehrer')
  }
}
