// destructuring ( 구조분해할당, 비구조화 )
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

//같은 자료형만 가능
const [a, , b] = [1, 2, 3];
console.log(a, b);

const abcObj = {
  c: 'C',
  d: {
    e: 'D',
  },
  f: 'F',
};

const { c, d: { e }, f } = abcObj;
console.log(c, e, f);

// 객체복사
const objectA = {
  a: '1',
  b: '2',
  c: '3',
};
const objectB = { ...objectA };
console.log(objectA, objectB);
console.log(objectA === objectB);
