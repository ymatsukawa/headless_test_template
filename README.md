# headless test template

## Prepare and running

### Requirements

* docker
* docker-compose

### Installation

```
$ docker-compose build
$ docker-compose -f docker-compose.example_app.yml
```

### Run test

```
$ docker-compose -f docker-compose.example_app.yml up
$ docker-compose run headless yarn run test
```

## Structure

* `./jest.config.js` > jest config including puppeteer, coverage, target files and etc.
* `./puppeteer_*.js`
  * `puppeteer.config.js` > puppeteer core settings
  * `puppeteer_setup_config.js` > set test as headless when initializing test
  * `puppeteer_teardown_config.js` > shut down setting when all test finished or aborted
* `./test`
  * `__tests__` > test files should be in
  * `util` > custom test tools

## Docs

### puppeteer

* [API overview](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#overview)

### jest-puppeteer

 * [Getting started - Jest](https://jestjs.io/docs/getting-started)
 * [Using with puppeteer - Jest puppeteer](https://jestjs.io/docs/puppeteer)
 * [github/smooth-code/jest-puppeteer](https://github.com/smooth-code/jest-puppeteer)