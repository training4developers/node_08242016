console.log(exports === module.exports); // this is true

exports.doIt = function(msg) {
	console.log(`do it: ${msg}`);
};


