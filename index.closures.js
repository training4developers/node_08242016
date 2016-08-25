'use strict';

function outer() {
	let t = "test";

	console.log('before settimeout');
	setTimeout(function() {
		t = "test is over";
		console.log('timeout fn invoked: 2000');
	},2000);
	console.log('after settimeout');

	function inner() {
		console.log(t);
	}
	return inner;
}

const fn = outer();
fn();

setTimeout(function() {
	fn();
}, 3000);


