#!/bin/sh
# https://mirkosertic.github.io/Bytecoder/chapter-1/page-1-a/

cd ..
source ./download.sh
cd hello

rm -rf test/HelloWorld.class
rm -rf build
javac test/HelloWorld.java
java -jar ../bytecoder-cli-2019-12-08-executable.jar -classpath=. -mainclass=test.HelloWorld -builddirectory=./build -backend=wasm -minify=false
http-server -c-1 .
