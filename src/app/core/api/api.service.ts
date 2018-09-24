import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  getById(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/pranks/${id}`);
  }

  update(id: string, body: any): Observable<any> {
    return this.http.put(`http://localhost:3000/pranks/${id}`, body);
  }
}
