// Recursion - Task 1
// function sum(n) {
//     if (n == 0) return 0
//     return n + sum(n - 1)
//   }
// console.log(sum(5))
// console.log(sum(1))
// console.log(sum(12))


// Recursion - Task 2
// function factorial (a){
//   if (a == 1) return 1 
//   return a * factorial (a-1)
// }
// console.log (factorial (5))
// console.log (factorial (4))
// console.log (factorial (2))


// Recursion - Task 3
// function doubleFactorial (num){
//   if (num<=1) return 1
//   return num * doubleFactorial (num-2)
// }
// console.log (doubleFactorial (0))
// console.log (doubleFactorial (2))
// console.log (doubleFactorial (9))


// Recursion - Task 4
// function fibonacci (num){
//   if (num <2) return num
//   return fibonacci (num-1) + fibonacci (num-2)
// }
// console.log (fibonacci (5))
// console.log (fibonacci (4))
// console.log (fibonacci (2))


// Recursion - Task 5
// function sumDigit (a){
//   if (a<=0) return 0
//   return a%10 + sumDigit (Math.floor (a/10))
// }
// console.log (sumDigit (111))
// console.log (sumDigit (222))
// console.log (sumDigit (333))


// Recursion - Task 6
// let i=0
// function multiSum (a){
//   i++
//   if (i>10) return 0
//   return i*a + multiSum (a) 
// }
// console.log (multiSum (1))


// Recursion - Task 7
// function evenRecursion (a){
//     if (a < 0) a = -a;
//     function evenRecursion (a) {
//         if (a == 0) return true;
//         else if (a == 1) return false;
//         else return evenRecursion (a - 2);
//     }
//     return evenRecursion (a);
// }
// console.log (evenRecursion(124))
// console.log (evenRecursion(-41))
// console.log (evenRecursion(16))




// Closure - Task 1
// function createMultiplier (a){
//   return function (b){
//     return a*b
//   } 
// }
// const double = createMultiplier (2)
// console.log (double(5))
// console.log (double(10))


// Closure - Task 2 (Incorrect)
// function incrementBy (a){
//   return function (b){
//     return a+b
//   }
// }
// const addFive = incrementBy (5)
// console.log (addFive(10))
// const addFifteen = incrementBy (15)
// console.log (addFifteen(10))
  

// Closure - Task 3
// function createAdder (a){
//   return function (b){
//     return a+b
//   }
// }
// const add5 = createAdder (5)
// console.log (add5 (3))
// console.log (add5 (7))
// console.log (add5 (-5))


// Closure - Task 4
// function product (a1,b1){
//   return function (a2, b2){
//     return function (a3, b3){
//       return a1*a2*a3 + b1*b2*b3
//     }
//   }
// }
// console.log (product (1,2)(1,1)(2,3))
// console.log (product (10,2)(5,0)(2,3))
// console.log (product (1,2)(2,3)(3,4))


// Closure - Task 5
// function makePassword (a){
//   return function (b) {
//     if (a == b) return true
//         else return false
//   }
// }
// let sendPassword = makePassword ("softClub")
// console.log (sendPassword("intellect"))
// console.log (sendPassword("softClub"))
// console.log (sendPassword("hello"))
