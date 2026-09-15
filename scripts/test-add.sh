#!/usr/bin/env bash
set -euo pipefail

add() {
  echo "$(( $1 + $2 ))"
}

check_add() {
  local actual
  actual="$(add "$1" "$2")"

  if [[ "$actual" != "$3" ]]; then
    echo "FAIL: add($1, $2): expected $3, got $actual"
    exit 1
  fi

  echo "PASS: add($1, $2) = $actual"
}

check_add 2 3 5
check_add -2 3 1
check_add 0 0 0

echo "All tests passed!"