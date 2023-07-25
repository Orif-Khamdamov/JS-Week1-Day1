// String - Class Task 1
// function isEmpty (a){
//     if (a=="") return true
//     else return false
// }
// console.log(isEmpty (""))
// console.log(isEmpty ("a"))


// String - Class Task 2
// function concatName (a,b){
//     let c = b.concat(", ",a)
//     return c
// }
// console.log(concatName ("Jhon", "Doe"));


// String - Class Task 3
// function oddOrEven (a){
//     if (a.length%2 ==0) return true
//     else return false
// }
// console.log (oddOrEven("apples"))
// console.log (oddOrEven("pears"))
// console.log (oddOrEven("cherry"))


// String - Class Task 4 - Browser
// function isLastCharacterN (a){
//     if (a.at (-1) === 'n') return true
//     else return false
// } 
// console.log (isLastCharacterN ("Aiden"))
// console.log (isLastCharacterN ("Bert"))


// String - Class Task 5
// function repeatString (a,b){
//     if (typeof (a) !== "string") return "Not a String"
//     else return a.repeat (b)
// }
// console.log (repeatString ("Mubashir", 2))
// console.log (repeatString ("Matt", 3))
// console.log (repeatString (1990, 7))


// String - Class Task 6
// function capitalLetetters (a){
//     let str = a.split("")
//     let cnt=0
//     for (let i=0; i<str.length; i++){
//         if (str[i] == str[i].toUpperCase()) cnt++
//     }
//     return cnt
// }
// console.log(capitalLetetters ("fvLzpxmgXSDrobbgMVrc"));
// console.log(capitalLetetters ("JMZWCneOTFLWYwBWxyFw"));
// console.log(capitalLetetters ("mqeytbbjwqemcdrdsyvq"));


// String - Class Task 7
// function calculate (a,b,c){
//     if (c == "+") return a+b
//     else if (c == "-") return a-b
//     else if (c == "*") return a*b
//     else if (c == "/") return a/b
//     else if (c == "%") return a%b
// }
// console.log(calculate (4,9,"+"));
// console.log(calculate (6,3,"*"));
// console.log(calculate (14,3,"%"));


// String - Class Task 8
// function numberSyllables (a){
//     let b = a.split ("-")
//     return b.length
// }
// console.log(numberSyllables("buf-fet"));
// console.log(numberSyllables("beau-ti-ful"));
// console.log(numberSyllables("on-o-mat-o-poe-ia"));


// String - Class Task 9
// function evenOddString (a) {
//     let b = ""
//     let c = ""
//     for (let i=0; i<a.length; i=i+2) b += a[i]
//     for (let i=1; i<a.length; i=i+2) c += a[i]
//     return b.concat (" ",c)
// }
// console.log(evenOddString("mubashir"));
// console.log(evenOddString("edabit"));
// console.log(evenOddString("airforce"));


// String - Class Task 10 - Version 1
// function potatoes (a){
//     return a.split("potato").length-1
// }
// console.log(potatoes("potato"));
// console.log(potatoes("potatopotato"));
// console.log(potatoes("potatoapple"));


// String - Class Task 10 - Version 2 Browser
// function potatoes (a){
//     a = a.replaceAll ("potato", "@")
//     let k=0
//     for (let i=0; i<a.length; i++){
//         if (a[i] == "@") k++
//     }
//     return k
// }
// console.log(potatoes("potato"));
// console.log(potatoes("potatopotato"));
// console.log(potatoes("potatoapple"));


// String - Class Task 11
// function detectWord (a){
//     let b = ""
//     for (let i=0; i<a.length; i++){
//         if (a[i]==a[i].toLowerCase()) b += a[i]
//     }
//     return b
// }
// console.log(detectWord("UcUNFYGaFYFYGtNUH"));
// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
// console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));


// String - Class Task Additional 1
// function comp (a,b){
//     let cnt1 = 0
//     let cnt2 = 0
//     for (let i=0; i<a.length; i++) cnt1++
//     for (let i=0; i<b.length; i++) cnt2++
//     if (cnt1==cnt2) return true
//     else return false
// }
// console.log(comp("AB", "CD"));
// console.log(comp("ABC", "DE"));
// console.log(comp("hello", "edabit"));


// String - Class Task Additional 2
// function replaceVowel (a){
//     let b = ""
//     for (let i=0; i<a.length; i++){
//         if (a[i]=="a") b += 1
//         else if (a[i]=="e") b += 2
//         else if (a[i]=="i") b += 3
//         else if (a[i]=="o") b += 4
//         else if (a[i]=="u") b += 5
//         else b+= a[i]
//     }
//     return b
// }
// console.log(replaceVowel("karachi"));
// console.log(replaceVowel("chembur"));
// console.log(replaceVowel("khandbari"));




// String - Home Task 1 - Browser
// function modifyLast (a, b){
//     let c = a.at(-1)
//     let d = c.repeat(b-1)
//     return a.concat(d)
// }
// console.log(modifyLast("Hello", 3));
// console.log(modifyLast("hey", 6));
// console.log(modifyLast("excuse me what?", 5));


// String - Home Task 2 - Browser
// function firstLast (a){
//     let b = a.at(0)
//     let c = a.at(-1)
//     return b.concat(c)
// }
// console.log(firstLast("ganesh"));
// console.log(firstLast("shiva"));
// console.log(firstLast("vishnu"));


// String - Home Task 3
// function toInt (a){
//     return Number(a)
// }
// console.log(toInt("77"));

// function toStr(a){
//     return String(a)
// }
// console.log(toStr(77));
// console.log(toStr(532));


// String - Home Task 4 - Browser
// function isPlural (a){
//     if (a.at(-1) == "s") return true
//     else return false
// }
// console.log(isPlural ("changes"));
// console.log(isPlural ("change"));
// console.log(isPlural ("dudes"));


// String - Home Task 5
// function reverseCapitalize (str){
//     let b =""
//     for (let i=str.length-1; i>=0; i--){
//         b += str[i].toUpperCase()
//     }
//     return b
// }
// console.log(reverseCapitalize("abc"));
// console.log(reverseCapitalize("hellothere"));
// console.log(reverseCapitalize("input"));


// String - Home Task 6
// function checkEnding (a, b){
//     let res = a.includes(b)
//     return res
// }
// console.log(checkEnding("abc","bc"));
// console.log(checkEnding("abc","d"));
// console.log(checkEnding("feminine","nine"));


// String - Home Task 7
// function checkPalindrome (a){
//     let b =""
//     for (let i=a.length-1; i>=0; i--){
//         b += a[i]
//     }
//     if (a==b) return true
//     else return false
// }
// console.log(checkPalindrome("mom"));
// console.log(checkPalindrome("hscary"));
// console.log(checkPalindrome("reviver"));


// String - Home Task 8
// function charCount (a,b){
//     let cnt = 0
//     for (let i=0; i<b.length; i++){
//         if (b[i]==a) cnt++
//     }
//     return cnt
// }
// console.log(charCount("a","edabit"));
// console.log(charCount("c","Chamber of secrets"));
// console.log(charCount("b","big fat bubble"));


// String - Home Task 9
// function capToFront (a){
//     let b = ""
//     let c = ""
//     for (let i=0; i<a.length; i++){
//         if (a[i]==a[i].toUpperCase()) b += a[i]
//         else c += a[i]
//     }
//     return b.concat(c)
// }
// console.log(capToFront ("hApPy"));
// console.log(capToFront ("moveMENT"));
// console.log(capToFront ("shOrtCAKE"));


// String - Home Task 10

