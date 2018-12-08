#!/usr/bin/env bash


#java -cp target/suman-1.0-SNAPSHOT.jar suman.App

cd "$(dirname $(dirname "$BASH_SOURCE"))"

mvn -T 12 clean install -DskipTests

mvn exec:java -Dexec.mainClass="suman.App"
