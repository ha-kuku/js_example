//let과 var의 차이점//
/*let myName = donghyun;
let myName = gyuri;

var yourName = Mari;
var yourName = Cile;

function logName() {
  console.log(myName);
}

function logyourname() {
  console.log(yourName);
}

logName();
logyourname();*/

//문자열 변수//
let myString = "Hello";
let myNumber = "500";
typeof myNumber;
myNumber = 500;
typeof myNumber;

//상수 선언//
let count = 1;
count = 2;
console.log(count);

/*const count = 1;
count = 2;*/

var myInt = 5;
var myFloat = 6.607;
myInt;
myFloat;

console.log(myInt);
console.log(myFloat);

//문자열 선언//
const string = "The revolution will not be televised";
console.log(string);

//const badString = This is a test;//

const single = "single quotes";
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

//javascript 삽입_backtick 사용//
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting);

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined);

//문자열 길이 찾기//
var browserType = "chrome";
browserType.length;
//--------------------------------------------------------------------------

//if else 구문
let Anum = 5;
let Bnum;

if (Anum > 1) {
  Bnum = 20;
} else {
  Bnum = 10;
}
console.log(Bnum);

//while 구문
n = 0;
x = 0;
while (n < 3) {
  n++;
  x += n;
}
console.log(n);
/*
// for / for in / for of / forEach() / while / do...while/ class / class + 인스턴스 / 인스턴스 메소드
잔디밭 왜 안생긴거지*/
