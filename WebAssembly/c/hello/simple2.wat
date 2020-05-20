(module
  (type (;0;) (func (param i32)))
  (type (;1;) (func))
  (import "imports" "i" (func (;0;) (type 0)))
  (func (;1;) (type 1)
    i32.const 42
    call 0)
  (export "e" (func 1)))
