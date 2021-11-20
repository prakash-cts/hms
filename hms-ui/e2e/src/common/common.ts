import { browser } from 'protractor';

export class Common {
    async sleep(sleepTime: number) {
        await browser.sleep(sleepTime);
      }
    getRandomNumber(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getCurrentUrl() {
      return browser.getCurrentUrl();
    }
}
