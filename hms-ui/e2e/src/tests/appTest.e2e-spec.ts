import { Common } from '../common/common';
import { browser, logging } from 'protractor';
import { AppPage } from '../app.po';

describe('workspace-project App', () => {
  const page: AppPage= new AppPage(),
      common: Common = new Common();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 240000;
  });
  browser.driver.manage().timeouts().setScriptTimeout(150000);

  it('should display welcome message', async () => {
    await page.navigateTo();
    await common.sleep(5000);

    expect(await page.getTitleText()).toEqual('hms-ui app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
