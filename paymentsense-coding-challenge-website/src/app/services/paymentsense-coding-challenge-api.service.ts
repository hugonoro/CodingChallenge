import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class PaymentsenseCodingChallengeApiService {
  constructor(private httpClient: HttpClient) {
  }

  public getHealth(): Observable<string> {
    return this.httpClient.get('https://localhost:59867/health', { responseType: 'text' });
  }

  public getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>('https://localhost:59867/countries/all');
  }

  public searchByName(name: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>('https://localhost:59867/countries/search', {params: { name }})
  }
}
