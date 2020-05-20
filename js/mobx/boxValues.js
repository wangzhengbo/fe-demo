import { observable, configure, runInAction, action } from 'mobx';
// import { useStrict } from 'mobx';

// useStrict(true)
configure({enforceActions: 'observed'})

const cityName = observable.box('Vienna');

console.log(cityName.get());
// 输出 'Vienna'

cityName.observe(function(change) {
	console.log(change.oldValue, '->', change.newValue);
});

runInAction(() => {
	cityName.set('runInAction');
})

action(() => {
	cityName.set('action');
})()

cityName.set('Amsterdam');
