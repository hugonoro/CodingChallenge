import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './containers/countries.component';


@NgModule({
  declarations: [CountriesComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    TableModule
  ]
})
export class CountriesModule { }
