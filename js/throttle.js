
function throttle(func, time) {
    let first = true
    let lastTime
    let timer

    return function() {
        const thiz = this
        const args = [...arguments]
        if (first) {
            first = false
            lastTime = new Date().getTime()
            func.apply(thiz, args)
            return
        }
        if (timer) {
            return
        }
        const currentTime = new Date().getTime()
        if (currentTime - lastTime >= time) {
            lastTime = new Date().getTime()
            func.apply(thiz, args)
            return
        }
        timer = setTimeout(function() {
            timer = null
            lastTime = new Date().getTime()
            func.apply(thiz, args)
        }, time - (currentTime - lastTime))
    }
}

const func = throttle(function() {
    // console.log('this', this, arguments)
    console.log(new Date().getTime(), 'func')
}, 500)

const sleep = time => {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

async function test() {
    const thiz = {a: 1}
    func.call(thiz, 'a', 1, 2)
    await sleep(1000)
    func()
    await sleep(200)
    func()
    await sleep(10)
    func()
    await sleep(10)
    func()
    await sleep(10)
    func()
    await sleep(10)
    func()
    await sleep(10)
    func()
    await sleep(10)
    func()
    await sleep(10)
}

test()