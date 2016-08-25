'use strict';

function g() {
	console.log(this);
}

g();

var o = {
	id: 2,
	g: g
};

o.g();

console.log(g === o.g);

var h = {
	y: function() {

	}
};

var d = h.y;



