// import { observable, action } from 'mobx'
const { observable, action, runInAction } = require('mobx')

class Ticker {
    @observable tick = 0

    @action.bound
    increment() {
        this.tick++ // 'this' 永远都是正确的
        console.log("this", this, this.tick)
    }
}

const ticker = new Ticker()
// ticker.increment()
setInterval(ticker.increment, 1000)

function sleep(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

const a = runInAction(async () => {
    console.log('run in action')
    await sleep(2000)
    console.log('run after action')
})
console.log('a', a)