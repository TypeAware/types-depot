#!/usr/bin/env bash

set -e;

cd "$(dirname "$BASH_SOURCE")"
export GOPATH="$PWD"
go clean
go install main

