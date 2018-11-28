#!/usr/bin/env bash


#java -cp target/suman-1.0-SNAPSHOT.jar suman.App

cd "$(dirname $(dirname "$BASH_SOURCE"))"

mvn install -DskipTests

mvn exec:java -Dexec.mainClass="suman.App"
