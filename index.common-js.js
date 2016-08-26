'use strict';

const path = require('path');
const fs = require('fs');

// a module
global.firstMod = (function(exports) {

	exports.doIt = function() {
		console.log('do it');
	};

});

// a module
global.secondMod = (function(exports) {

	exports.doIt2 = function() {
		console.log('do it 2');
	};


});

function myRequire(name) {
	var m = {};
	global[name](m);
	return m;
}

function myRequire2(fileName) {
	var moduleCode = fs.readFileSync(fileName + '.js', 'utf8');
	var exports = {};
	var module = {
		exports: exports
	};
	console.log(`(function(exports, require, module) { ${moduleCode} })`);
	var moduleFn = eval(`(function(exports, require, module) { ${moduleCode} })`);
	moduleFn(exports, null, module);
	return module.exports;
}

const myModule = myRequire2('./my-module');

myModule.doIt('this is fun');


// var myMod1 = myRequire('firstMod');
// var myMod2 = myRequire('secondMod');

// myMod1.doIt();
// myMod2.doIt2();








