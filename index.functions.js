'use strict';
function g() {

	// call site this
	console.log(this);

	function doIt() {
		// call site this
		console.log(this);
	}

	const doIt2 = function() {
		// call site this
		console.log(this);
	};

	const doIt3 = () => {
		// lexical this
		console.log(this);
	};

	global.doIt4 = doIt3;

	doIt();
	doIt2();
	doIt3();

}

var o = { id:2,  g: g };

o.g();




