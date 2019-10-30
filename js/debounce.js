
function debounce(func, time) {
    let timer

    return function() {
        const thiz = this
        const args = [...arguments]
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function() {
            timer = null
            func.apply(thiz, args)
        }, time)
    }
}

const func = debounce(function() {
    // console.log('this', this, arguments)
    console.log(new Date().getTime(), 'func')
}, 500)

const sleep = time => {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

async function test() {
    console.log(new Date().getTime())
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