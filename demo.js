//Revere string
//input "hello"output: "olleh"

// const string = "hello";
// const newstring = string.split("");

// let reverse = "";
// for (var i = string.length - 1; i >= 0; i--) {
//   reverse += newstring[i];
// }

// console.log(reverse);

//using recursion

// function reverseString(str) {
//   if (str == "") return "";
//   return reverseString(str.slice(1)) + str[0];
// }

// console.log(reverseString("hello"));
// const string = "hello";
// console.log(string.slice(1));

//two sum O(n^2)

// var inp = [2, 4, 5, 6, 3];

// let target = 9;

// for (let i = 0; i <= inp.length - 1; i++) {
//   for (let j = i + 1; j < inp.length; j++) {
//     if (inp[i] + inp[j] == target) {
//       console.log(i, j);
//     }
//   }
// }

// const num = new Map();
// num.set(2, 0);
// console.log(num.get(2));

// Input:
// [0,1,0,3,12]

// Output:
// [1,3,12,0,0]
// const inp = [0, 1, 0, 3, 12];

// inp.push(10);
// console.log(inp);

// for (var i = 0; i < inp.length; i++) {
//   if (inp[i] == 0) {
//     inp.splice(i, 1);
//     inp.push(0);
//   }
// }

// console.log(inp);

// const inp = [0, 1, 0, 3, 12];
// let final = [];
// var count = 0;

// for (let i = 0; i < inp.length; i++) {
//   if (inp[i] != 0) {
//     final.push(inp[i]);
//   } else {
//     count++;
//   }
// }

// for (let i = 0; i < count; i++) {
//   final.push(0);
// }

// console.log(final);

// Input:
// [1,[2,[3,4]]]

// Output:
// [1,2,3,4]
// const array = [1, [2, [3, 4]]];
// console.log(array.flat(2));

//group object
// const emp = [
//   { name: "A", dept: "IT" },
//   { name: "B", dept: "HR" },
//   { name: "C", dept: "IT" },
// ];
// const group = {};

// for (let i = 0; i < emp.length; i++) {
//   const key = emp[i].dept;
//   if (!group[key]) {
//     group[key] = [];
//   }

//   group[key].push(emp[i].nme);
// }

// console.log(group);

//debouncing

// cache implimentation
// let cache = {};
// function add(a, b) {
//   let key = `${a}+${b}`;
//   if (cache[key]) {
//     console.log("from cache");
//     return cache[key];
//   } else {
//     console.log("from outer cache");
//     let value = a + b;
//     cache[key] = value;
//     return value;
//   }
// }

// console.log(add(2, 3));
// console.log(add(2, 3));

// LRU least recently usedccahe

// const lru = {};
// let count = 0;

// function sub(a, b) {
//   const key = `${a}-${b}`;
//   if (!lru[key]) {
//     lru[key] = [];
//   }
//   count++;
//   let value = a - b;

//   let data = { value, count };
//   lru[key].push(data);
//   return value;
// }
// console.log(lru);
// console.log(sub(3, 4));
// console.log(sub(3, 4));
// console.log(sub(3, 4));
// console.log(lru);

// factorail

// function fact(n) {
//   if (n === 0 || n === 1) return 1;
//   else {
//     return n * fact(n - 1);
//   }
// }

// console.log(fact(10));

// fibnosis

// function fibnosis(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   return fibnosis(n - 1) + fibnosis(n - 2);
// }
// console.log(fibnosis(10));

// 10

// console.log([] + []);
// console.log([] == false);
// console.log(null == undefined);
// console.log(typeof null);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }

// for (var i = 0; i < 3; i++) {
//   (function (x) {
//     setTimeout(() => console.log(x), 100);
//   })(i);
// }

// var a;

// console.log(a);
// a = 10;
// console.log(b);

// let b = 20;

// check prime

// function checkPrime(n) {
//   if (n < 2) return 0;

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(checkPrime(23));

// var num = 12;

// const checkEven = new Promise((resolve, reject) => {
//   if (num % 2 === 0) {
//     resolve(num);
//   } else {
//     reject(num);
//   }
// })
//   .catch((num) => {
//     return num + 1;
//   })
//   .then((num) => {
//     if (num % 2 == 0) {
//       console.log("even");
//     } else {
//       throw new Error("odd");
//     }
//   })
//   .catch((error) => console.log(error));
