import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lehrer } from '../Models/lehrer';

@Injectable({
  providedIn: 'root'
})
export class LehrerService {

  constructor(private httpClient: HttpClient) { }

  getAllLehrer(): Observable<Lehrer[]> {
    return this.httpClient.get<Lehrer[]>('http://localhost:8081/lehrer');
  }
}
