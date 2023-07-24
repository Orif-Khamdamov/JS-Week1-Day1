// // Task 1
// let numb
// function perimeter (numb){
//     return 4*numb; 
// }
// console.log (perimeter(7));
// console.log (perimeter(8));
// console.log (perimeter(25));


// //Task 2
// function area (a){
//     let s=a*a
//     return s;
// }
// console.log (area(8));
// console.log (area(11));
// console.log (area(6));


// //Task 3
// function averageNum (x, y){
//     let avr = ((x+y)/2);
//     return avr;
// }
// console.log (averageNum(7,9));
// console.log (averageNum(8,12));
// console.log (averageNum(10,30));


// Task 4
// function evenOrOdd (a){
//     return a%2==0? 3 : 4
// }
// console.log (evenOrOdd (7));
// console.log (evenOrOdd (12));
// console.log (evenOrOdd (-8));

//Task 5
// function calculation (x){
//     let y = 17*Math.pow(x,2) - 6*x + 13
//     return y;
// }
// console.log (calculation (2))
// console.log (calculation (0))
// console.log (calculation (10))


//Task 6
// function longestTime (h,m,s) {
//     let hour = h*3600
//     let min = m*60
//     let sec = s
//     if (hour > min && hour > sec) return h;
//     else if (min > hour && min > sec) return m;
//     else return s;
// }
// console.log (longestTime (1, 59, 3598))
// console.log (longestTime (2, 300, 15000))
// console.log (longestTime (15, 955, 59400))


//Task 7
// function same (a){
//     let x3 = a%10
//     let x2 = Math.floor (a/10%10)
//     let x1 = Math.floor (a/100)
//     if (x1==x2 || x1==x3 || x2==x3) return true;
//     else return false;
// }
// console.log (same (212))
// console.log (same (897))
// console.log (same (811))


//Task 8
// function largestSwap (a){
//     let x1 = a%10;
//     let x2 = Math.floor (a/10)
//     let a2 = x1*10 + x2
//     if (a<a2) return false
//     else return true
// }
// console.log (largestSwap (14))
// console.log (largestSwap (53))


//Task 9
// function addUp (a){
//     let cnt = 0;
//     for (let i = 1; i<=a; i++)
//     cnt +=i
//     return cnt
// }
// console.log (addUp (4))


//Task 10
// function different (a, b, c){
//     if (a!=b && a!=c) return 1
//     else if (b!=a && b!=c) return 2
//     else if (c!=a && c!=b) return 3
// }
// console.log (different (5,5,10))
// console.log (different (897,1,1))
// console.log (different (811,100,811))


//Task 11
// function evenLoop (a,b){
//     let cnt=0
//     x = Math.abs (a)
//     y = Math.abs (b)
//     if (x<y){
//         for (let i=x; i<=y; i++)
//         if (i%2==0) cnt +=i
//         return -1*cnt
//     }
//     else if (x>y){
//         for (let i=y; i<=x; i++)
//         if (i%2==0) cnt +=i
//         return -1*cnt
//     }
//     else return 0
// }
// console.log (evenLoop (-5,-3))
// console.log (evenLoop (-1,-1))
// console.log (evenLoop (-14,-18))


//Task 12
// function sum (n,k){
//     let cnt=0
//     for (let i=1; i<=n; i++)
//     cnt += Math.pow (i,k)
//     return cnt
// }
// console.log (sum (5,3))
// console.log (sum (1,1))
// console.log (sum (4,3))


// Task 13
// function maxNum (n){
//     let max=0
//     for (let i=n; i>0; i=Math.floor (i/10)) {
//         let x = i%10
//         if (x>max) max=x
//     }
//     return max
// }
// console.log (maxNum(7132))
// console.log (maxNum(897))
// console.log (maxNum(811))

// Task 14
// function isSymmetrical(n){
//     let rev=0
//     for (let i=n; i>0; i=Math.floor (i/10)) {
//         rev = rev*10 + i%10
//     }
//     if (n == rev) return true
//     else return false
// }
// console.log (isSymmetrical(7227))
// console.log (isSymmetrical(9939))
// console.log (isSymmetrical(44444444))


// Task 15
// function addDigits (n){
//     let cnt1=0
//     let cnt2=0
//     for (let i=n; i>0; i=Math.floor (i/10)) {
//         cnt1 += i%10
//     }
//     if (cnt1 > 9) {
//         for (let j=cnt1; j>0; j=Math.floor (j/10)) {
//             cnt2 += j%10
//         }
//         return cnt2
//     }
//     else return cnt1
// }
// console.log (addDigits (38))
// console.log (addDigits (0))
