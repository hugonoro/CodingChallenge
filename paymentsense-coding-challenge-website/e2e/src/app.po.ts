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

  getCountryList() {
    return element(by.className('country-list'));
  }

  getCountryRow() {
    return element(by.className('country-row'));
  }
}
