'use strict';

var x=0,y=0,funcs=[];

for (; x<5; x++) {
	// you can modify the code between
	// you cannot invoke console.log in the first loop
	// you cannot use y in the console.log

	//(function(t) {
		//var t = x;
		const t = x;

		funcs.push(function() {
			console.log(t);
		});
	//})(x);


	// and here ONLY
}

for (; y<5;y++) {
	funcs[y]();
}
