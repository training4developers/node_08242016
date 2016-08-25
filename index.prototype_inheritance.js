'use strict';

const p = {
	amt: 1000,
	address: {
		city: 'Palo Alto',
		state: 'CA'
	}
};

const c = Object.create(p);
p.amt = 2000;

c.amt = 5;
delete c.amt;

c.address.state = 'TX';

//console.log(c.amt);
console.log(p.address.state);
