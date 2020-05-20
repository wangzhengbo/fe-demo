// https://cn.mobx.js.org/refguide/computed-decorator.html
import { observable, computed } from 'mobx'

const x = observable.box(3)
const y = observable.box(1)
const divided = computed(() => {
    if (y.get() === 0)
        throw new Error("Division by zero")
    return x.get() / y.get()
})

divided.get() // 返回 3

y.set(0) // OK
try {
    divided.get() // 报错: Division by zero
} catch (e) {
    console.error(e)
}
try {
    divided.get() // 报错: Division by zero
} catch (e) {
    console.error(e)
}

y.set(2)
console.log(divided.get()) // 已恢复; 返回 1.5
