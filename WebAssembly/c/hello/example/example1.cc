#include <emscripten.h>
// http://www.ruanyifeng.com/blog/2017/09/asmjs_emscripten.html
int main() {
  EM_ASM({ alert('Hello World!'); });
}
