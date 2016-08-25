var t;

console.log(typeof t);

t = 5;
console.log(typeof t);

t = "hello world";
console.log(typeof t);

t = true;
console.log(typeof t);

t = Symbol('my symbol');
console.log(typeof t);

t = { };
console.log(typeof t);

t = [];
console.log(typeof t);
console.log(t instanceof Array);

t = function() {

	t.someProp = "test";

};
//t();

console.log(typeof t);
console.log(t.someProp);

t = null;
console.log(typeof t);

console.log(t === null || t === undefined);
console.log(t == null);

console.log("1" == 1);


