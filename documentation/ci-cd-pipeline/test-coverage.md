# Test Coverage

## Instructions

### Add github workflow

```yml
name: Test Coverage Report

on:
  pull_request:
    branches:
      - master
  push:
    branches:
      - master

jobs:
  coverage:
    name: Coverage Report
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Install Node 16
        uses: actions/setup-node@v2
        with:
          node-version: '16.x'
      - name: Install Dependencies
        run: npm ci
      - name: Run Coverage Report
        uses: ArtiomTr/jest-coverage-report-action@v2
```
