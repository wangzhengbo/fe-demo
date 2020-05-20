#!/bin/sh

~/.wasmer/globals/wapm_packages/.bin/wasm3 --dir=. --func fib ./fib32.wasm 20
~/.wasmer/globals/wapm_packages/.bin/wasm3 --dir=. --repl ./fib32.wasm
