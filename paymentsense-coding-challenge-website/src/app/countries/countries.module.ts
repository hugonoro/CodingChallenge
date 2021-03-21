import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';


import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './containers/countries.component';


@NgModule({
  declarations: [CountriesComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CountriesRoutingModule,
    AutoCompleteModule,
    ButtonModule,
    DividerModule,
    RippleModule,
    TableModule,
    MenubarModule
  ]
})
export class CountriesModule {
}
