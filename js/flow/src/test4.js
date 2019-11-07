// @flow
function concat(a: string, b: string) {
	return a + b;
}

concat('A', 'B'); // Works!
concat(1, 2); // Error!

function method(x: number, y: string, z: boolean) {
	// ...
}

method(3.14, 'hello', true);

function method2(x: Number, y: String, z: Boolean) {
	// ...
}

method2(new Number(42), new String('world'), new Boolean(false));
