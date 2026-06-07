
/**
 * 
 * 
 */

let a = 0;
let b = 'Hello';

console.log(a && b); // 0
console.log(a || b); // Hello
console.log(!a); // true
console.log(!b); // false

a = true;
b = false;
c = true;

console.log(a && b || c); // true

let x = 10 ;
let y = 20 ;

console.log(x > 5 && y < 30); // true
console.log(x > 15 || y > 10); // 