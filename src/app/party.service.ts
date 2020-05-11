import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  private baseUrl = 'http://localhost:3306/springboot-crud-rest/api/v1/parties';

  constructor(private http: HttpClient) { }

  getParty(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createParty(party: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, party);
  }

  updateParty(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteParty(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPartiesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
