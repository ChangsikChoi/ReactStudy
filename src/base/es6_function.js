//  1. array function

const a = function () {
  console.log('function a');
  let v = 1;
  return v;
};

const b = () => {
  console.log('function b');
  let z = 1;
  return z;
};

const va = a();
const vb = b();
console.log(va, vb);

const c = (v1, v2) => v1 + v2;
console.log(c(va, vb));

// 2. defalut value
const function1 = (a, b = 'world') => {
  console.log(a + ' ' + b);
};

function1('hello');
