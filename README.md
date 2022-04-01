# Smite QL API

![Unit Tests](https://github.com/davidholyko/smite-ql-api/actions/workflows/unit-tests.yml/badge.svg)
![Automation Tests](https://github.com/davidholyko/smite-ql-api/actions/workflows/automation-tests.yml/badge.svg)
![Linting Check](https://github.com/davidholyko/smite-ql-api/actions/workflows/linting-check.yml/badge.svg)

## Versioning

This project uses [semantic versioning](https://semver.org/).

## Pre-Requisites

- [Node](https://nodejs.org/en/)
- [NVM](https://npm.github.io/installation-setup-docs/installing/using-a-node-version-manager.html)
- [Smite Developer Account](https://www.hirezstudios.com/)
- [Redis](https://redis.io/)
- [Docker]()

#### Download Pre-Requisites with Homebrew

```
brew install node
brew install redis
brew install docker
```

## Official Developer Guide

[Official Developer Guide](https://docs.google.com/document/d/1OFS-3ocSx-1Rvg4afAnEHlT3917MAK_6eJTR6rzr-BM/edit) contains api endpoints documentation for a developer.

#### Register for Smite API Developer Account

Follow instructrions [here](https://fs12.formsite.com/HiRez/form48/secure_index.html) to request access.

#### Replacing **.env** credentials

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

## Redis (with Docker)

```
# Start redis server
docker run -p 6379:6379 --name redis-redisjson -d redislabs/rejson:latest

# Check connection
redis-cli ping

# Access redis cli in docker
docker exec -it <image> redis-cli
```

## Sandbox

```
# Run sandbox
npm run start:sandbox

# Skip git from noticing changes to sandbox
git update-index --skip-worktree src/sandbox/sandbox.js
```

# Troubleshooting

### Redis is not working

```
Redis Client Error Error: connect ECONNREFUSED 127.0.0.1:6379
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1133:16) {
  errno: -61,
  code: 'ECONNREFUSED',
  syscall: 'connect',
  address: '127.0.0.1',
  port: 6379
}
```

See Redis (with Docker) section above

### Deleting a broken version

_Deleting a remote tag is for when you need to unpublish a version update because it's bad_

```
# tagname is string like "v1.8.1"
git push --delete origin <tagname>
```
