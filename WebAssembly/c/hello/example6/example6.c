
#include <stdio.h>
#include <emscripten.h>

// emcc -s EXPORTED_FUNCTIONS="['_sayHi', '_daysInWeek']" example6.c -o example6.js
void sayHi() {
  printf("Hi!\n");
}

int daysInWeek() {
  return 7;
}
