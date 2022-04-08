# Github Pages Deployment

## Instructions

### Add github workflow

```yml
name: Deploy

on:
  pull_request:
    branches:
      - master
  push:
    branches:
      - master

jobs:
  coverage:
    name: Deploy to GH pages
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
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4.3.0
        with:
          branch: gh-pages # The branch the action should deploy to.
          folder: coverage # The folder the action should deploy.
```
