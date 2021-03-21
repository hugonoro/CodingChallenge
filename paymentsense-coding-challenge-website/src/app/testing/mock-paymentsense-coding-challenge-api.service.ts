import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class MockPaymentsenseCodingChallengeApiService {
  public getHealth(): Observable<string> {
    return of('Healthy');
  }

  public getCountries(): Observable<Country []> {
    return of([{
      name: 'United Kindgom',
      flag: 'flagURL',
      capital: 'London',
      population: 65110000,
      timezones: [
        'UTC-08:00',
        'UTC-05:00',
        'UTC-04:00',
        'UTC-03:00',
        'UTC-02:00',
        'UTC',
        'UTC+01:00',
        'UTC+02:00',
        'UTC+06:00'
      ],
      currencies: [{
        code: 'GBP',
        name: 'British pound',
        symbol: '£'
      }],
      languages: [
        {
          iso639_1: 'en',
          iso639_2: 'eng',
          name: 'English',
          nativeName: 'English'
        }
      ],
      altSpellings: [
        'GB',
        'UK',
        'Great Britain'
      ],
    }]);
  }
}
