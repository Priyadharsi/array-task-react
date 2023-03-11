// Identify all of the variables, object property names, primitive values, and objects shown in the following code

function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

//variables:greeting,name,howdy,foo
//object property names:a,b,c,d
//primitive values:1,2,3,4,5
//object:{ a: 1, b: 2, c: [3, 4, 5], d: {} };}