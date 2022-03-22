# Smite QL API

![example workflow](https://github.com/github/docs/actions/workflows/unit-tests.yml/badge.svg)
![example workflow](https://github.com/dhko/smite-ql-api/actions/workflows/unit-tests.yml/badge.svg)

## Pre-Requisites

- [Node](https://nodejs.org/en/)
- [NVM](https://npm.github.io/installation-setup-docs/installing/using-a-node-version-manager.html)
- [Smite Developer Account](https://www.hirezstudios.com/)

## Official Developer Guide

[Official Developer Guide](https://webcdn.hirezstudios.com/hirez-studios/legal/smite-api-developer-guide.pdf) contains api endpoints for a user.

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

## Versioning

This project uses [semantic versioning](https://semver.org/).

#### Deleting a broken version

_Deleting a remote tag is for when you need to unpublish a version update because it's bad_

```
# tagname is string like "v1.8.1"
git push --delete origin <tagname>
```
