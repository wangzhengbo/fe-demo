// source ~/dev/work_webassembly/emsdk/emsdk_env.sh
// emcc hello.c -o hello.html
// emrun --no_browser --port 8080 .
// wasm2wat hello.wasm -o hello.wat
#include <stdio.h>
int main(int argc, char ** argv) {
  printf("Hello, world!\n");
}