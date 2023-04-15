import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private baseURL = "http://localhost:8091/api/personne/Personnes";
  constructor(private httpClient: HttpClient) { }

  getPeronnesList(): Observable<Personne[]> {
    return this.httpClient.get<Personne[]>(`${this.baseURL}`);
  }
}
