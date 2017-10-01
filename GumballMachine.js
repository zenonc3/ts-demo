exports.dispense = function (money){
  let gumball = null;
  if (money.value >= 2){
    gumball = {flavour: 'apple', color: 'red'};
  }
  return gumball
}