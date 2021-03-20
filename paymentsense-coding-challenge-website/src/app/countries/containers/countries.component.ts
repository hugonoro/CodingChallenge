import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { PaymentsenseCodingChallengeApiService } from '../../services';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  public countryList: Country[];

  constructor(private paymentsenseCodingChallengeApiService: PaymentsenseCodingChallengeApiService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.paymentsenseCodingChallengeApiService.getCountries()
      .subscribe(data => this.countryList = data);
  }
}
