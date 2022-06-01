import { Injectable } from '@angular/core';
import { Lehrer } from './Lehrer';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';
 
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 
  constructor(private httpClient: HttpClient) { }
 
  // Add
  AddLehrer(data: Lehrer): Observable<any> {
    let API_URL = `${this.REST_API}/add-lehrer`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
 
  // Get all objects
  GetAllLehrer() {
    return this.httpClient.get(`${this.REST_API}`);
  }
 
  // Get single object
  GetLehrer(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/read-lehrer/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
 
  // Update
  updateLehrer(kuerzel:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/update-book/${kuerzel}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
 
  // Delete
  deleteLehrer(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-lehrer/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }
 
 
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
