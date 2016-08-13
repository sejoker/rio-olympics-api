[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# Rio olympics standings api

[There is no official public API for the Rio Olympics ](https://www.quora.com/Will-there-be-an-API-for-the-Rio-Olympics-website)

This repo provides JSON API for team standings at Rio Olympics 2016.

Api accepts optional query parameter 'rank' to sort standings by [gold](https://webtask.it.auth0.com/api/run/wt-sejoker-gmail_com-0/rio-olympics-api?webtask_no_cache=1&rank=gold) medals or [total](https://webtask.it.auth0.com/api/run/wt-sejoker-gmail_com-0/rio-olympics-api?webtask_no_cache=1&rank=total) medals.

## Setup

```bash
$ npm i
```

## How to run locally

```bash
$ npm start
```

## How to deploy

### Setup webtask account

```bash
$ npm install wt-cli -g
$ wt init
```

### Deploy webtask
```bash
$ npm run deploy
```


## Licence

MIT