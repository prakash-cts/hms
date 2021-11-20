import { Common } from './../common/common';
import { browser } from 'protractor';
import { AppPage } from '../app.po';

describe('Login or Sign Up - navigate to Dashboard', () => {

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 240000;
  });

  let appPage: AppPage = new AppPage();
  const email:string =process.env.HMS_EMAIL!,
        password=process.env.HMS_PWD!;

  log('');
  log('File loginOrSignUp.e2e-spec.ts is present');
  log('');

  it('should navigate to login page and display product overview message', async() => {
    await appPage.navigateTo();
    await browser.sleep(1000);
    // log('App Page Title is : '+ await appPage.getTitleText());
    // expect(appPage.getTitleText()).toBeTruthy;
    log('In Login page or Admin Sign up page');
    await browser.sleep(1000);
  });

  it('should login or sign up', async() => {
    log('Logging in .... ');
      appPage.setEmail(email);
      appPage.setPassword(password);
      await browser.sleep(1000);
      //   expect(appPage.isStartButtonEnabled()).toBeTruthy();
      appPage.start();
      await browser.sleep(2000);
      log('Finished Log in .... ');
  });
});

// Log function which will execute only if there are no errors
function log(message: string) {
    browser.controlFlow().execute(function() {
      console.log(message);
    });
  }
