import { observable, when } from 'mobx'

const value = observable.box(1)
when(() => value.get() > 10, () => {
    console.log('value', value.get())
})
when(() => value.get() > 5).then(() => {
    console.log('value######')
})

value.set(5)
value.set(10)
value.set(11) // output 11 
value.set(12)
value.set(4)
