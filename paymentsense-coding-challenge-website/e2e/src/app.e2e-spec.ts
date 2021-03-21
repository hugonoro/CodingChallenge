import { AppPage } from './app.po';
import { browser, logging, ExpectedConditions as EC } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    browser.wait(EC.presenceOf(page.getTitle()));
  });

  it('should display welcome message', () => {
    expect(page.getTitleText()).toEqual('Paymentsense Coding Challenge!');
  });

  it('should display a button to load the list of countries on demand', () => {
    expect(page.getCountriesLoaderButton().isDisplayed).toBeTruthy();
  });

  it('should display a list of countries upon clicking the load button', () => {
    browser.wait(EC.elementToBeClickable(page.getCountriesLoaderButton()));
    page.getCountriesLoaderButton().click();
    browser.wait(EC.presenceOf(page.getCountryRow()));
    expect(page.getCountryRow().isPresent).toBeTruthy();
  });

  it('should display country additional details when expanding the corresponding table row', () => {
    browser.wait(EC.elementToBeClickable(page.getCountriesLoaderButton()));
    page.getCountriesLoaderButton().click();
    browser.wait(EC.elementToBeClickable(page.getCountryRowExpandToggler()));
    page.getCountryRowExpandToggler().click();
    expect(page.getCapitalCity().isPresent).toBeTruthy()
    expect(page.getPopulation().isPresent).toBeTruthy()
    expect(page.getTimezones().isPresent).toBeTruthy()
    expect(page.getCurrencies().isPresent).toBeTruthy()
    expect(page.getLanguages().isPresent).toBeTruthy()
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
