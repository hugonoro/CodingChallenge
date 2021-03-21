import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MenuItem } from 'primeng/api';
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

  public selectedCountry: FormControl;
  public filteredCountries: Country[];

  public menuItems: MenuItem[];

  public destroy$ = new Subject();

  constructor(private paymentsenseCodingChallengeApiService: PaymentsenseCodingChallengeApiService) {
  }

  ngOnInit(): void {
    this.selectedCountry = new FormControl('');
    this.setMenuItems();
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

  public searchCountry(event) {
    this.paymentsenseCodingChallengeApiService.searchByName(event.query)
      .subscribe(data => {
        this.filteredCountries = data;
      });
  }

  public setMenuItems() {
    this.menuItems = [
      {
        label: 'Products',
        icon: 'pi pi-fw pi-briefcase',
      },
      {
        label: 'About Us',
        icon: 'pi pi-fw pi-info-circle',
      },
      {
        label: 'Support',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Email',
            icon: 'pi pi-fw pi-envelope',

          },
          {
            label: 'Phone',
            icon: 'pi pi-fw pi-phone',
            items: [
              {
                label: 'National',
              },
              {
                label: 'International'
              }
            ]
          },
          {
            label: 'Chat',
            icon: 'pi pi-fw pi-comments',
          }
        ]
      },
    ];
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
