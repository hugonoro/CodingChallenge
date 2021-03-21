import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl);
  }

  getTitle() {
    return element(by.css('app-root h1'));
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getCountriesLoaderButton() {
    return element(by.className('countries-loader-button'));
  }

  getCountryRowExpandToggler() {
    return element(by.css('button[class*="row-expander"]'));
  }

  getCapitalCity() {
    return element(by.className('capital-city'));
  }

  getPopulation() {
    return element(by.className('population'));
  }

  getTimezones() {
    return element(by.className('timezones'));
  }

  getCurrencies() {
    return element(by.className('currencies'));
  }

  getLanguages() {
    return element(by.className('languages'));
  }

  getCountryRow() {
    return element(by.className('country-row'));
  }
}
