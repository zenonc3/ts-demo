const GumballMachine = require('./GumballMachine');

let coin = {value: 2};
let note = {value: '5', serial: '12313123123'};
let creditcard = {number: '13131231312', balance: '200'};

console.log(GumballMachine.dispense(creditcard));