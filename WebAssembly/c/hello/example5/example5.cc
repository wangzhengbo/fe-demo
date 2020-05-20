// http://www.ruanyifeng.com/blog/2017/09/asmjs_emscripten.html
// emcc -s EXPORTED_FUNCTIONS="['_SquareVal']" -s EXTRA_EXPORTED_RUNTIME_METHODS="['cwrap']" example5.cc -o example5.js
extern "C" {
  double SquareVal(double val) {
    return val * val;
  }
}
