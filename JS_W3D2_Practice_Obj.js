// // Object - Class Task 1
// function getVoteCount(obj){
//     let prop1 = obj.upvotes
//     let prop2 = obj.downvotes
//     return prop1-prop2
// }
// console.log(getVoteCount({upvotes:13,downvotes:0}));
// console.log(getVoteCount({upvotes:2, downvotes:33 }));
// console.log(getVoteCount({upvotes:132, downvotes:132 }));


// Object - Class Task 2
// function volumeOfBox (obj){
//     return obj.width * obj.length * obj.height
// }
// console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));
// console.log(volumeOfBox({ width: 4, length: 2, height: 2 }));
// console.log(volumeOfBox({ width: 2, length: 3, height: 5 }));


// Object - Class Task 3
// function fiftyThirtyTwenty (a){
//     let obj = {
//         Needs: a/100*50,
//         Wants: a/100*30,
//         Savings: a/100*20
//     }
//     return obj
// }
// console.log({ "Needs": 5000, "Wants": 3000, "Savings": 2000 });
// console.log({ "Needs": 25000, "Wants": 15000, "Savings": 10000 });
// console.log({ "Needs": 6725, "Wants": 4035, "Savings": 2690 });


// Object - Class Task 4
// function relationToLuke (a){
//     let obj = {
//         "Darth Vader": "father",
//         "Leia": "sister",
//         "Han": "brother in law" 
//     }
//     return `Luke, I am your ${obj[a]}`
// }
// console.log(relationToLuke("Darth Vader"));
// console.log(relationToLuke("Leia"));
// console.log(relationToLuke("Han"));


// Object - Class Task 5
// function cityFacts (obj){
//     return `${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`
// } 
// console.log(cityFacts({ name: "Paris", population: "2,140,526", continent: "Europe"}));


// Object - Class Task 6
// function totalAmountAdjectives (a){
//     let keys = Object.keys(a)
//     return keys.length
// }
// console.log(totalAmountAdjectives({ a: "moron" }));
// console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }));
// console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }));


// Object - Class Task 7
// function nSidedShape (a){
//     let obj = {
//         1 : "circle",
//         2 : "semi-circle",
//         3 : "triangle",
//         4 : "square",
//         9 : "nonagon"
//     }
//     return obj[a]
// }
// console.log(nSidedShape(3));
// console.log(nSidedShape(1));
// console.log(nSidedShape(9));


// Object - Class Task 8
// function isInRange (a,obj){
//     if (a>obj.min && a<obj.max) return true
//     else return false
// }
// console.log(isInRange(4, { min: 0, max: 5 }));
// console.log(isInRange(4, { min: 4, max: 5 }));
// console.log(isInRange(4, { min: 6, max: 10 }));


// Object - Class Task 9
// function helpMe (a){
//     return a[1]+" "+a[2]+" "+a[3]+" "+a[2]
// }
// console.log(helpMe ({ 1: "Mommy", 2: "please", 3: "help" } ));
// console.log({ 1: "Me", 2: "innocent", 3: "is" });
// console.log({ 1: "Must", 2: "lawyer", 3: "call" });


// Object - Class Task 10
// function hasKey (a,b){
//     return Object.keys(a).includes(b)
// }
// console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"));
// console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"));
// console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"));


// Object - Class Task 11
// function inkLevels (a){
//     let b = Object.values(a)
//     let num = Math.min (...b)
//     return num
// }
// console.log(inkLevels({"cyan": 23,"magenta": 12,"yellow": 10}));
// console.log(inkLevels({"cyan": 432,"magenta": 543,"yellow": 777}));


// Object - Class Task 12
// function isEmpty (a){
//     if (Object.entries(a).length == 0) return true
//     else return false
// }
// console.log(isEmpty({}));
// console.log(isEmpty({ a: 1 }));


// Object - Class Task 12 Extra
// function calculateDifference (a,b){
//     let c = Object.values(a).reduce((x,y) => x+y) 
//     return c-b
// }
// console.log(calculateDifference({ "baseball bat": 20 }, 5));
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));


// Object - Class Task 13
// function maximumScore (a){
//     return a.reduce((x,y) => {
//         return x+y.score
//     },0)
// }
// console.log(maximumScore([
//     { tile: "N", score: 1 }, { tile: "K", score: 5 },
//     { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 },
//     { tile: "A", score: 1 }, { tile: "E", score: 1 }
//     ]));


// Object - Class Task 14
// function addName (obj,key,value){
//     obj[key] = value
//     return obj
// }
// console.log(addName({}, "Brutus", 300));
// console.log(addName({ piano: 500 }, "Brutus", 400));
// console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));


// Object - Class Task 15
// function generation (a,b){
//     let objMale = {
//         "-3" : "great grandfrather",
//         "1" : "son",
//         "2" : "grandson"
//     }
//     let objFemale = {
//         "-3" : "great grandmother",
//         "1" : "daughter",
//         "2" : "granddaughter"
//     }
//     if (b=="m") return objMale[a]
//     else return objFemale[a]
// }
// console.log(generation(2, "f"));
// console.log(generation(-3, "m"));
// console.log(generation(1, "f"));


// Object - Class Task 16
// function toArray (a){
//     return Object.entries(a)
// }
// console.log(toArray({ a: 1, b: 2 }));
// console.log(toArray({ shrimp: 15, tots: 12 }));
// console.log(toArray({}));


// Object - Class Task 17
// function keysAndValues (a){
//     return [(Object.keys(a)), Object.values(a)]
// }
// console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
// console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));


// Object - Class Task 18
// function getBudgets(a){
//     return a.reduce((x,y) => {
//         return x+y.budget
//     },0)
// }
// console.log(getBudgets([
//     { name: "John",  age: 21, budget: 29000 },
//     { name: "Steve",  age: 32, budget: 32000 },
//     { name: "Martin",  age: 16, budget: 1600 }
//     ]));
//     console.log(getBudgets([
//         { name: "John", age: 21, budget: 23000 },
//         { name: "Steve",  age: 32, budget: 40000 },
//         { name: "Martin",  age: 16, budget: 2700 }
//         ]));


// Object - Class Task 19
// function freeShipping (a){
//     if (Object.values(a).reduce((x,y) => x+y) > 50) return true
//     else return false
// }
// console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));
// console.log(freeShipping({ "Flatscreen TV": 399.99 }));
// console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }));


// Object - Class Task 20
// function mapping (letter){
//     let obj = {}
//     for (i=0; i<letter.length; i++){
//         obj[letter[i]] = letter[i].toUpperCase()
//     }
//     return obj
// }
// console.log(mapping(["p", "s"]));
// console.log(mapping(["a", "b", "c"]));
// console.log(mapping(["a", "v", "y", "z"]));


// Object - Class Task 21
// function afterNYears (obj,num){
//     for (const [key,value] of Object.entries(obj)){
//         obj[key] = value + num
//     }
//     return obj
// }
// console.log(afterNYears({ "Joel" : 32, "Fred" : 44, "Reginald" : 65, "Susan" : 33, "Julian" : 13}, 1));
// console.log(afterNYears({ "Baby" : 2, "Child" : 8, "Teenager" : 15, "Adult" : 25, "Elderly" : 71 }, 19));
// console.log(afterNYears({ "Genie" : 1000, "Joe" : 40 }, 5));


// Object - Class Task 23
// function removeEntry (obj, key){
//     delete obj[key]
//     return obj
// }
// console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate"));
// console.log(removeEntry({ mirror: 500, painting: 1 }, "mirror") );


// Object - Class Task 24
// function mostExpensiveItem (obj){
//     let max = Math.max (...Object.values(obj))
//     return Object.keys(obj).find(key => obj[key] == max)
// }
// console.log(mostExpensiveItem({ piano: 2000,}));
// console.log(mostExpensiveItem({ tv: 30, skate: 20, }));
// console.log(mostExpensiveItem({ tv: 30, skate: 20, stereo: 50, }));


// Object - Class Task 25
// function invert (obj){
//     let arrKey = Object.keys(obj)
//     let arrValue = Object.values(obj)
//     let newObj = {}
//     for (let i=0; i<arrKey.length; i++){
//         newObj[arrValue[i]] = arrKey[i]
//     }
//     return newObj
// }
// console.log(invert({ "z": "q", "w": "f" }));
// console.log(invert({ "a": 1, "b": 2, "c": 3 }));
// console.log(invert({ "zebra": "koala", "horse": "camel" }));
