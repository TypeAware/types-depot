#!/usr/bin/env bash

set -e;

root="$(dirname $(dirname "$BASH_SOURCE"))";
root_absolute="$(cd "$root" && pwd)";
cd "$root_absolute";
export PATH="$root_absolute/node_modules/.bin:${PATH}";

type_creator build -f 'tc.conf.js'
