# Linting Check

## Instructions

### Add github workflow

```yml
name: Linting Check

on:
  pull_request:
    branches:
      - master
  push:
    branches:
      - master

jobs:
  release:
    name: Check Linting
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Install Node 16
        uses: actions/setup-node@v2
        with:
          node-version: '16.x'
      - name: Check Linting
        run: npm run lint
```
