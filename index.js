var person = {
  name: 'lee',
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`);
  },
};

console.log(typeof person);
console.log(person);

var empty = {};
console.log(typeof empty);

console.log('--------------------------------');

var simson = {
  firstName: 'dong-hyun',
  'last-name': 'Yi',
};

console.log(simson);

/*var obj = {};
var key = 'hello';

obj[key] = 'world';

console.log(obj);
console.log('--------------------------------------');*/

var circle = {
  radius: 5,

  getDiameter: function () {
    return 2 * this.radius;
  },
};
console.log(circle.getDiameter());
console.log('--------------------------------------');

let x = 1,
  y = 2;

const obj = { x, y };
console.log(obj);

var add = function (x, y) {
  return x + y;
};

console.dir(add);
console.log(add(2, 5));

const sum = (x, y) => x + y;
console.log(add(2, 5));

/*function countdown(n) {
  for (var i = n; i >= 0; i--) console.log(i);
}
countdown(10);*/

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
