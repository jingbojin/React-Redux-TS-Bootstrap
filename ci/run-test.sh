#!/bin/bash
set -e

echo '==> Building (verifying linting and types):'
CI=true npm run build

echo '==> Running test-coverage:'
CI=true npm run test:coverage
