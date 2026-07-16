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
