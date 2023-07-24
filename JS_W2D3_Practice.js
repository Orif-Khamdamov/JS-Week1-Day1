// Array - ClassTask 1
// function getFirstValue (a){
//     return a.shift()
// }
// console.log(getFirstValue([1,2,3]));
// console.log(getFirstValue([80,5,100]));
// console.log(getFirstValue([-500, 0, 50]));


// Array - ClassTask 2 - Version 1
// function makePair (a,b){
//     let c = []
//     c.push(a,b)
//     return c
// }
// console.log(makePair(1,2));


// Array - ClassTask 2 - Version 2
// function makePair (a,b){
//     return [a,b]
// }
// console.log(makePair(1,2));


// Array - ClassTask 3
// function reverse (a){
//     return a.reverse()
// }
// console.log(reverse([1,2,3,4]));
// console.log(reverse([9, 9, 2, 3, 4]));
// console.log(reverse([]));


// Array - ClassTask 4
// function incrementItems (a){
//     let b = a.map (myFunct)

//     function myFunct (num){
//         return num+1
//     }
//     return b
// }
// console.log(incrementItems ([0, 1, 2, 3]));
// console.log(incrementItems ([2, 4, 6, 8]));
// console.log(incrementItems ([-1, -2, -3, -4]));


// Array - ClassTask 5
// function getLastItem (a){
//     return a.pop()
// }
// console.log(getLastItem([1, 2, 3]));
// console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));


// Array - ClassTask 6
// function arrayToString (a){
//     return a.join ("")
// }
// console.log(arrayToString([1, 2, 3, 4, 5, 6]));
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));


// Array - ClassTask 7
// function check (a,b){
//     return a.includes(b)
// }
// console.log(check ([1, 2, 3, 4, 5], 3));
// console.log(check ([1, 1, 2, 1, 1], 3));
// console.log(check ([5, 5, 5, 6], 5));


// Array - ClassTask 8
// function findIndex (a,b){
//     return a.indexOf (b)
// }
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
// console.log(findIndex(["a", "g", "y", "d"], "d"));


// Array - ClassTask 9
// function concat (a,b){
//     return a.concat(b)
// }
// console.log(concat([1, 3, 5], [2, 6, 8]));
// console.log(concat([7, 8], [10, 9, 1, 1, 2]));
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));


// Array - ClassTask 10
// function toNumberArray (a){
//     let b = a.map(myFunct)
//     function myFunct (x){
//         return Number(x)
//     }
//     return b
// }
// console.log(toNumberArray (["9.4", "4.2"]));
// console.log(toNumberArray (["91", "44"]));
// console.log(toNumberArray (["9.5", "8.8"]));


// Array - ClassTask Extra 12
// function parseArray (a){
//     let b = a.map((e) => {
//         return e.toString()
//     })
//     return b
// }
// console.log(parseArray([1, 2, "a", "b"]));
// console.log(parseArray(["abc", 123, "def", 456]));
// console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]));


// Array - ClassTask 11
// function sumArray (a){
//     let res = a.reduce (function (x,y){
//         return x+y
//     })
//     return res
// }
// console.log(sumArray ([1, 2, 3, 4, 5]));
// console.log(sumArray ([-1, 0, 1]));
// console.log(sumArray ([0, 4, 8, 12]));


// Array - ClassTask 12
// function arrBetween (a,b,c){
//     let res = c.filter (myFun)

//     function myFun (value){
//         return value > a && value < b
//     }
//     return res
// }
// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
// console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
// console.log(arrBetween(7, 32, [1, 2, 3, 78]));


// Array - ClassTask 13
// function arrayValuesTypes (a){
//     res = a.map (function (value){
//         return typeof(value)
//     })
//     return res
// }
// console.log(arrayValuesTypes([1, 2, "null", []]));
// console.log(arrayValuesTypes(["214", true, false, 2.15, [], null]));
// console.log(arrayValuesTypes([21.1, "float", "array", ["I’m array"], true, 214]))


// Array - ClassTask 14
// function wordLengths (a){
//     res = a.map (function (value){
//         return value.length
//     })
//     return res
// }
// console.log(wordLengths(["hello", "world"]));
// console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));
// console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the"]));


// Array - ClassTask 15
// function checkSquareAndCube(a){
//     if (Math.sqrt (a[0])==(Math.cbrt (a[1]))) return true
//     else return false
// }
// console.log(checkSquareAndCube([4, 8]));
// console.log(checkSquareAndCube([16, 48]));
// console.log(checkSquareAndCube([9, 27]));


// Array - ClassTask 16
// function invertArray (a){
//     let res = a.map (myFun)

//     function myFun(value){
//         return -1*value
//     }
//     return res
// }
// console.log(invertArray([1, 2, 3, 4, 5]));
// console.log(invertArray([1, -2, 3, -4, 5]));
// console.log(invertArray([]));


// Array - ClassTask 17
// function getMultipliedArr (a){
//     let res = a.map ((value) => {
//         return value*2
//     })
//     return res
// }
// console.log(getMultipliedArr([2, 5, 3]));
// console.log(getMultipliedArr([1, 86, -5]));
// console.log(getMultipliedArr([5, 382, 0]));


// Array - ClassTask 18
// function getSumOfItems (a){
//     let res = a.reduce ((x,y)=>{
//         return x+y
//     })
//     return res
// }
// console.log(getSumOfItems([2, 7, 4]) );
// console.log(getSumOfItems([45, 3, 0]) );
// console.log(getSumOfItems([-2, 84, 23]));


// Array - ClassTask 19
// function forbiddenLetter (l, arr){
//     let a = arr.join("")
//     let res = a.includes(l)
//     return !res
// }
// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));
// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));
// console.log(forbiddenLetter("m", []));


// Array - ClassTask 20
// function sumFive (a){
//     arr = a.filter (elem => elem > 5)
//     if (arr.length > 0) {
//         let res = arr.reduce ((x,y)=>{
//             return x+y
//         })
//         return res
//     }
//     else return 0
// }
// console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
// console.log(sumFive([1, 2, 3, 4]));
// console.log(sumFive([10, 12, 28, 47, 55, 100]));


// Array - ClassTask 21
// function filterArray (a){
//     let res = a.filter (elem => typeof (elem) == "number")
//     return res
// }
// console.log(filterArray([1, 2, 3, "a", "b", 4]));
// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));
// console.log(filterArray(["Nothing", "here"]));


// Array - ClassTask 22
// function evenOrOdd (a){
//     if (a.length==0) return "Even"
//     else {
//         let res = a.reduce ((x,y)=>{
//             return x+y
//         })
//         if (res%2==0) return "Even"
//         else return "Odd"
//     }
// }
// console.log(evenOrOdd([1]));
// console.log(evenOrOdd([]));
// console.log(evenOrOdd([0, 1, 5]));


// Array - ClassTask 23
// function rangeOfNum (a,b){
//     let c = []
//     for (let i=a+1; i<b; i++){
//         c.push(i)
//     }
//     return c
// }
// console.log(rangeOfNum(2, 4));
// console.log(rangeOfNum(5, 9));
// console.log(rangeOfNum(2, 11));


// Array - HomeTask 1 - ???
// function concat (a,b,c){
//     let res = a.concat(b,c)
//     return res
// }
// console.log(concat([1, 2, 3], [4, 5], [6, 7]));
// console.log(concat([1], [2], [3], [4], [5], [6], [7]));
// console.log(concat([1, 2], [3, 4]))


// Array - HomeTask 2
// function secondLargest(a) {
//     let res = a.sort (function (a,b){
//         return b-a
//     })
//     return res[1]
// }
// console.log(secondLargest([10, 40, 30, 20, 50]));
// console.log(secondLargest([25, 143, 89, 13, 105]));
// console.log(secondLargest([54, 23, 11, 17, 10]));


// Array - HomeTask 3
// function compact (a){
//     res = a.filter (e => e!=false && e!=null && e!=0 && e!="" && e!=undefined && e!=NaN)
//     return res
// }
// console.log(compact([0, 1, false, 2, "", 3]));
// console.log(compact([1,0,false,null,undefined,"banana"]));
// console.log(compact([]));


// Array - HomeTask 4
// function arrayOfMultiples (n,l){
//     let array = []
//     for (let i=1; i<=l; i++){
//         let x=n*i
//         array.push(x)
//     }
//     return array
// }
// console.log(arrayOfMultiples(7, 5));
// console.log(arrayOfMultiples(12, 10));
// console.log(arrayOfMultiples(17, 6));


// Array - HomeTask 5
// function marathonDistance (a){
//     let array = a.map ((value) => {
//         return Math.abs(value)
//     })
//     let res = array.reduce ((x,y)=>{
//         return x+y
//     })
//     if (res==25) return true
//     else return false
// }
// console.log(marathonDistance([1, 2, 3, 4]));
// console.log(marathonDistance([1, 9, 5, 8, 2]));
// console.log(marathonDistance([-6, 15, 4]));


// Array - HomeTask 6
// function mirror (a){
//     let b = a.slice().reverse()
//     let res = a.concat(b)
//     return res
// }
// console.log(mirror([0, 2, 4, 6]));
// console.log(mirror([1, 2, 3, 4, 5]));
// console.log(mirror([3, 5, 6, 7, 8]));


// Array - HomeTask 7
// function indexMultiplier (a){
//     let b = a.map ((value, ind) => {
//         return value*ind
//     })
//     let c = b.reduce ((x,y) => {
//         return x+y
//     })
//     return c
// }
// console.log(indexMultiplier([1, 2, 3, 4, 5]));
// console.log(indexMultiplier([-3, 0, 8, -6]));


// Array - HomeTask 8
// function ascDesNone (a,word){
//     if (word=="Asc"){
//         let b = a.sort ((a,b) => {
//             return a-b
//         })
//         return b
//     }
//     else if (word=="Des"){
//         let b = a.sort ((a,b) => {
//             return b-a
//         })
//         return b
//     }
//     else if (word=="None"){
//         return a
//     }
// }
// console.log(ascDesNone([4, 3, 2, 1], "Asc" ));
// console.log(ascDesNone([7, 8, 11, 66], "Des"));
// console.log(ascDesNone([1, 2, 3, 4], "None"));


// Array - HomeTask 9
// function findNaN (a){
//     let b = a.map ((elem) => {
//         return elem.toString()
//     })
//     return b.indexOf ("NaN")
// }
// console.log(findNaN([1, 2, NaN]));
// console.log(findNaN([NaN, 1, 2, 3, 4]));
// console.log(findNaN([0, 1, 2, 3, 4]));


// Array - HomeTask 10
// function reverseArr (a){
//     let array =[]
//     while (a>0){
//         array.push(a%10)
//         a = Math.floor (a/10)
//     }
//     return array
// }
// console.log(reverseArr(1485979));
// console.log(reverseArr(623478));
// console.log(reverseArr(12345));
