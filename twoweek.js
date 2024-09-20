// for / for in / for of / forEach() / while / do...while/ class / class + 인스턴스 / 인스턴스 메소드

//for 구문
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//for in 구문
const obj = {
  name: "이름",
  age: "나이",
};
for (const key in obj) {
  console.log(key); //key값 출력
  console.log(obj.name, obj.age); //value 값 출력

  console.log("key 값 : ${key}"); //
  console.log("value 값 : ${obj[key]}");
}

//for of 구문
const array = ["one", "two", "three"];

for (const element of array) {
  console.log(element);
  console.log(array);
}

//forEach() arrow function
const food = ["ramen", "rice", "pizza"];

array.forEach((food) => {
  console.log(food);
});

//while 구문
n = 0;
x = 0;
while (n < 3) {
  n++;
  x += n;
}
console.log(n);

//do while 구문
let i;
const p = "pizza";
do {
  i = 5;
} while (i > 5);
{
  console.log(p);
}

//class 생성
class Person {
  constructor(name, age, city) {
    console.log("construtor");
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

let kim = new Person("lee", "26", "ansan");
console.log(lee);
