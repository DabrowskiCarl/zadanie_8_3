// scripts.js 

var name = prompt('Enter your name');
alert('Hello, ' + name);
console.log('Hello, ' + name);

//abnb

const foo = 1;
let bar = foo;
bar = 9;
console.log(foo, bar); // => 1, 9

//

// bad
var count = 1;
if (true) {
    count += 1;
}

// good, use the let.
let count = 1;
if (true) {
    count += 1;
}