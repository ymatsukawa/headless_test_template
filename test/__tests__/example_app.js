const log = require('../util/log');
const screenshot = require('../util/screenshot')
const settings = require('../util/settings')
const EXAMPLE_APP_ENDPOINT = 'http://example_app:3000'

describe('Visit Root Page', () => {
  let page;
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage()
  })

  it('should be displayed 401 page when NOT logged in', async () => {
    log.debug('begin test');
    await page.goto(`${EXAMPLE_APP_ENDPOINT}/`)

    await page.waitForSelector('#unauthorized', { timeout: settings.timeout.page_wait })
    const homeH1Selector = await page.$('#unauthorized > h1')
    const homeH1 = await page.evaluate(e => e.textContent, homeH1Selector)
    await expect(homeH1).toEqual('401 unauthorized')
    log.debug('end test');
  })

  it('should be displayed home page when logged in', async () => {

    const email = 'myname@example.com'
    await page.goto(`${EXAMPLE_APP_ENDPOINT}/login`)
    await page.type('#email', email)
    await page.type('#password', 'mypassword')
    await page.click('#loginForm > div:nth-child(3) > input')

    await page.waitForSelector('#home', { timeout: settings.timeout.page_wait })
    const homeH1Selector = await page.$('#home > h1')
    const homeH1 = await page.evaluate(e => e.textContent, homeH1Selector)
    await expect(homeH1).toEqual('Logged In')
  })

  it('should render page', async () => {
    await page.screenshot(screenshot.options('example_app'));
  })
})
