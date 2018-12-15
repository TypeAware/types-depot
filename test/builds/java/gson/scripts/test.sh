#!/usr/bin/env bash


#export PATH=$PATH:/home/oleg/Desktop/geckodriver
# mvn -Dtest=SeleniumTest test
# mvn -Dtest=ExampleTest test

cd "$(dirname $(dirname "$BASH_SOURCE"))"
mvn clean test