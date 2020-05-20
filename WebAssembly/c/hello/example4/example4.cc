#include <emscripten.h>

extern "C" {
  double SquareVal(double val) {
    return val * val;
  }
}

// http://www.ruanyifeng.com/blog/2017/09/asmjs_emscripten.html
// emcc -s EXPORTED_FUNCTIONS="['_SquareVal', '_main']" example4.cc -o example4.html
int main() {
  EM_ASM({
    SquareVal = Module.cwrap('SquareVal', 'number', ['number']);
    var x = 12.5;
    alert('Computing: ' + x + ' * ' + x + ' = ' + SquareVal(x));
  });
}
