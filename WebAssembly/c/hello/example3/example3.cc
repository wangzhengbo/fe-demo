#include <emscripten.h>
#include <string>
// http://www.ruanyifeng.com/blog/2017/09/asmjs_emscripten.html
void Alert(const std::string & msg) {
  EM_ASM_ARGS({
    var msg = Pointer_stringify($0);
    alert(msg);
  }, msg.c_str());
}

int main() {
  Alert("Hello from C++!");
}
