// @flow

function log(a?: string) { // a can be string or undefined
	console.log(a)
}

function log2(a: ?string) { // a can be string or null or undefined
	console.log(a)
}

function log3(a?: ?string) {
	console.log(a)
}

function log4(a?: ???string) {
	console.log(a)
}

log()
log2()
log3()
log4()
