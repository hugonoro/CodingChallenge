import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './containers/countries.component';


@NgModule({
  declarations: [CountriesComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ButtonModule,
    RippleModule,
    TableModule
  ]
})
export class CountriesModule {
}
