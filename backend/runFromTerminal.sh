#!/bin/bash

export JAVA_HOME=$(/usr/libexec/java_home -v 11)

../gradlew build

VERSION=$(cat ../VERSION)

java -Xms512m -Xmx512m \
  -jar build/libs/backend-${VERSION}.jar
