#!/usr/bin/env bash

set -e;

repo_dir=$(dirname $(dirname "$BASH_SOURCE"));
repo_dir_absolute="$(cd "$repo_dir" && pwd)";

cd "$repo_dir_absolute";

export PATH="$repo_dir_absolute/node_modules/.bin:${PATH}";

ores_type_creator symlinks -f symlinks.js