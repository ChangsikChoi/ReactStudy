export const a = 1;
/* eslint-disable */
// 타입 종류
//boolean
let isBoolean: boolean = false;
//number
let num: number = 0;
//string
let text: string = '';
//array
let list: [] = [];
let strList: string[] = ['a', 'b'];
//object
let obj: object = {};
let user: { name: string; age: number; isMale: boolean };
//any
let anyValues: any = {};
//unknown
let unknownValue: unknown = 123;
let newNum: number = unknownValue as number;

// 유니온
let unionType: string | number = 1;

// 함수 타입 정의
let func: (a: number, b: string) => string;
let func2 = (a: number, b: string): string => a + b;

// custom type 정의
type MyStringType = string;
type MyNewType = { a: string; b: number };

//interface
interface UserInterface {
  name: string;
  age: number;
}

//interface extends
interface ExtendedUser extends UserInterface {
  gender: string;
}
interface TypeExtends extends MyNewType {
  c: any;
}
// let extUser: ExtendedUser = {};
// let typeExted: TypeExtends = {};

// generic
function toList<T>(a: T, b: T): T[] {
  return [a, b];
}
