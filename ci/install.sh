#!/bin/bash
set -ex

echo '==> npm version'
npm -v

echo '==> node version'
node -v

echo '==> jest version'
npm run jest -v

echo '==> Install code coverage tool'
npm install -g codecov

echo '==> Install application packages'
npm ci
