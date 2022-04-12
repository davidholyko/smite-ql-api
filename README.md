# Smite QL API

## Testing Strategy

![Statements](https://raw.githubusercontent.com/davidholyko/smite-ql-api/gh-pages/badges/badge-statements.svg)
![Branches](https://raw.githubusercontent.com/davidholyko/smite-ql-api/gh-pages/badges/badge-branches.svg)
![Functions](https://raw.githubusercontent.com/davidholyko/smite-ql-api/gh-pages/badges/badge-functions.svg)
![Lines](https://raw.githubusercontent.com/davidholyko/smite-ql-api/gh-pages/badges/badge-lines.svg)

View this repo's [test coverage](https://david-ko.com/smite-ql-api/).

### Integration Tests

Integration Tests require a real `DEV_ID` and `AUTH_KEY` from Hirez Studios. These tests make real API calls to the Smite API.

### Unit Tests

Unit Tests test pure functionality and use mock data from real API requests. These tests do not require a real `DEV_ID` and `AUTH_KEY`.

Tests should ideally be in the following format:

```javascript
describe('Some function', () => {
  it('should do something', () => {
    /* 1. SETUP */
    //   setup scenario (if needed) for test case
    //   could mean mocking functions
    /* 2. PROCESSING */
    //   invoking the funcction with the correct params
    /* 3. EXPECTATIONS */
    //   explicitly calling out what we expect the function to return or perform
    /* 4. ASSERTIONS */
    //   assert that expectations were maet
  });
});
```

## Versioning

This project uses [semantic versioning](https://semver.org/).

## Pre-Requisites

- [Node](https://nodejs.org/en/)
- [NVM](https://npm.github.io/installation-setup-docs/installing/using-a-node-version-manager.html)
- [Smite Developer Account](https://www.hirezstudios.com/)
- [Redis](https://redis.io/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

#### Download Pre-Requisites with Homebrew

```
brew install node
brew install redis
```

## Smite API and Developer Starter Instructions

[Smite API Developer Guide](https://docs.google.com/document/d/1OFS-3ocSx-1Rvg4afAnEHlT3917MAK_6eJTR6rzr-BM/edit) contains API endpoints documentation for a developer.

#### Register for Smite API Developer Account

Follow instructions [here](https://fs12.formsite.com/HiRez/form48/secure_index.html) to request access for a `DEV_ID` and `AUTH_KEY`.

#### Replace `.env` credentials

```
# This is an example file
# Copy over keys and replace values with real DEV_ID and AUTH_KEY
DEV_ID=1004
AUTH_KEY=23DF3C7E9BD14D84BF892AD206B6755C
```

## Installation

```
# Install project's node version
nvm install

# Use project's node version
nvm use

# Install packages
npm ci

# Start application
npm start
```

## Sandbox

This repo provides a sandbox file for a developer to play around with and see what data comes back. This file is not meant to be frequently updated with git. Below are some git commands to ignore or un-ignore the file as manual testing is done.

```
# Run sandbox
npm run start:sandbox

# Tell git to skip noticing changes to sandbox
git update-index --skip-worktree src/sandbox/sandbox.js

# Tell git to notice changes to sandbox
git update-index --no-skip-worktree src/sandbox/sandbox.js
```

# Troubleshooting

### Redis is not working

```sh
Redis Client Error Error: connect ECONNREFUSED 127.0.0.1:6379
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1133:16) {
  errno: -61,
  code: 'ECONNREFUSED',
  syscall: 'connect',
  address: '127.0.0.1',
  port: 6379
}
```

See [Redis tutorial](./documentation/redis/redis-tutorial.md) to start redis with docker.

### Deleting a remote tag

_Deleting a remote tag happens when you want to rewrite history and a semantic release is auto-generated. The automatic semantic release will fail if the tag already exists._

```
# tagname is string like "v1.0.0"
git push --delete origin <tagname>
```
