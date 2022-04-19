const log = require('../util/log');
const screenshot = require('../util/screenshot')

describe('Visit Page', () => {
  let page;
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage()
    await page.goto('http://example.com')
  })

  it('should be displayed page', async () => {
    log.debug('begin test');
    await expect(page).toMatch('Example Domain');
    log.debug('end test');
  })

  it('should render page', async () => {
    await page.screenshot(screenshot.options('sample'));
  })
})
