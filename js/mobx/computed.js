import { observable, autorun } from 'mobx'

const orderLine = observable.object({
    price: 0,
    amount: 1,
    get total() {
        return this.price * this.amount
    }
})

autorun()

console.log(orderLine.total)
orderLine.price = 2
console.log(orderLine.total)

const orderLine2 = observable({
    price: 0,
    amount: 1,
    get total() {
        return this.price * this.amount
    }
})
console.log(orderLine2.total)
orderLine2.price = 3
console.log(orderLine2.total)