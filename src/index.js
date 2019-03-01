let arraySimpleDeviders;

module.exports = function getZerosCount(number, base) {

  arraySimpleDeviders = [];
  SindleDevider(base);
  let min = FindeLegandr(number, arraySimpleDeviders[0][0], arraySimpleDeviders[0][1]);
  for (let index = 1; index < arraySimpleDeviders.length; index++) {
      const element = arraySimpleDeviders[index];
      const numLegandr = FindeLegandr(number, element[0], element[1]);
      if (min > numLegandr) {
          min = numLegandr;
      };    
  };
  return min;
};

function SindleDevider(number) {

  sqrtN = Math.floor(Math.sqrt(number));
  if (sqrtN < 2) {
      AddToArray(number);
      return;
  };
  let resDevider = number;
  for (let index = 2; index <= sqrtN; index++) {
      if (number%index == 0) {
          SindleDevider(number/index);
          resDevider = index;
          break;
      } ;
  };
  AddToArray(resDevider);
};

function AddToArray(elem) {
    
  const lenArraySimpleDeviders = arraySimpleDeviders.length;
  if (lenArraySimpleDeviders == 0) {
    arraySimpleDeviders.push([elem, 1])
  } else {
      for (let index = 0; index < lenArraySimpleDeviders; index++) {
          const element = arraySimpleDeviders[index];
          if (element[0] == elem) {
              element[1]++;
              return;                
          };
      };
      arraySimpleDeviders.push([elem, 1]);
  };
};

function FindeLegandr(number, devider, power) {

  let summ = 0;
  let N1 = 0;
  let pow = 0;
  do {
      pow++;
      N1 = Math.floor(number/Math.pow(devider, pow));
      summ += N1
  } while (N1 > 0);
  return Math.floor(summ/power);
};
