import * as GumballMachine from './GumballMachine';
import {Money, Gumball, Note} from './GumballMachine';

let coin : Money = {value: 2};
let note : Note = {value: 5, serial: '12313123123'};
// let creditcard : Money = {number: '13131231312', balance: '200'};

console.log(GumballMachine.dispense(note));