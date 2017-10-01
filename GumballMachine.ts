export interface Money {
  value: number;
}

export interface Gumball {
  color: string,
  flavour: string,
}

export interface Note extends Money{
  serial: string;
}

export function dispense(money: Money): Gumball{
  let gumball: Gumball = null;
  if (money.value >= 2){
    gumball = {flavour: 'apple', color: 'red'};
  }
  return gumball;
}