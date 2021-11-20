import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class AppPage {
  emailInput = element(by.name('email'));
  passwordInput = element(by.name('password'));
  startButton = element(by.buttonText('Login'));
  dashboardLink = element(by.linkText('dashboard'));

  async navigateTo(): Promise<unknown> {
    return browser.get('/');
  }
  async navigateToDashboard() {
    this.dashboardLink.click();
  }

  async setEmail(email: string) {
    this.emailInput.sendKeys(email);
    this.emailInput.sendKeys(protractor.Key.TAB);
  }
  async setPassword(password: string) {
    this.passwordInput.sendKeys(password);
    this.passwordInput.sendKeys(protractor.Key.TAB);
  }
  async isStartButtonEnabled() {
    return this.startButton.isEnabled();
  }

  async start() {
    this.startButton.click();
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }
}
