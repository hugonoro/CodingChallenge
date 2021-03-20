import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { Country } from '../../models/country';
import { PaymentsenseCodingChallengeApiService } from '../../services';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit, OnDestroy {
  public countryList: Country[];
  public loading: boolean;

  public destroy$ = new Subject();

  constructor(private paymentsenseCodingChallengeApiService: PaymentsenseCodingChallengeApiService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.loading = true;
    this.paymentsenseCodingChallengeApiService.getCountries()
      .pipe(
        finalize(() => this.loading = false),
        takeUntil(this.destroy$)
      )
      .subscribe(data => this.countryList = data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
