// Date - Class Task 1
// function halloween (a){
//     if (a.getMonth()==9 && a.getDate()==31) return "Bonfire toffee"
//     else return "toffee"
// }
// console.log(halloween(new Date("2013/10/31")));
// console.log(halloween(new Date("2012/07/31")));
// console.log(halloween(new Date("2011/10/12")));


// Date - Class Task 2
// function centuryFromYear (a){
//     return Math.ceil (a/100)
// }
// console.log(centuryFromYear(2005));
// console.log(centuryFromYear(1950));
// console.log(centuryFromYear(1900));


// Date - Class Task 3
// function monthName (num){
//     let obj = {
//         "1": "January", "2": "February", "3": "March", "4": "April",
//         "5": "May", "6": "June", "7": "July", "8": "August",
//         "9": "September", "10": "October", "11": "November", "12": "December"
//     }
//     return obj[num]
// }
// console.log(monthName(3));
// console.log(monthName(12));
// console.log(monthName(6));


// Date - Class Task 4 - ?
// function afterNMonths (year, month){
//     let date = new Date (year,0,2)
//     date.setMonth(date.getMonth()+month)
//     return date.getFullYear()
// }
// console.log(afterNMonths(2020, 24));
// console.log(afterNMonths(1832, 2));
// console.log(afterNMonths(1444, 60));


// Date - Class Task 5
// function formatDate (a){
//     return a.split("/").reverse().join("")
// }
// console.log(formatDate("11/12/2019"));


// Date - Class Task 6
// function hasFriday13 (month, year){
//     let date = new Date (year, month-1, 13)
//     if (date.getDay()==5) return true
//     else return false
// }
// console.log(hasFriday13(3, 2020));
// console.log(hasFriday13(10, 2017));
// console.log(hasFriday13(1, 1985));


// Date - Class Task 7
// function timeForMilkAndCookies (date){
//     if (date.getMonth()==11 && date.getDate()==24) return true
//     else return false
// }
// console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));
// console.log(timeForMilkAndCookies(new Date(2013, 0, 23)) );
// console.log(timeForMilkAndCookies(new Date(3000, 11, 24)));


// Date - Class Task 8
// function longestTime (h,m,s){
//     if (Math.max (h*3600, m*60, s) == h*3600) return h
//     else if (Math.max (h*3600, m*60, s) == m*60) return m
//     else if (Math.max (h*3600, m*60, s) == s) return s
// }
// console.log(longestTime(1, 59, 3598));
// console.log(longestTime(2, 300, 15000));
// console.log(longestTime(15, 955, 59400));


// Date - Class Task 9 - ?
// function getDay (date){
//     let m,d,y
//     [d,m,y] = date.split("/")
//     let myDate = new Date (y,m-1,d)
    
//     let objWeek = {
//         "0": "Sunday", "1": "Monday", "2": "Tuesday", "3": "Wednesday",
//         "4": "Thursday", "5": "Friday", "6": "Saturday"
//     }

//     return objWeek[myDate.getDay()]
// }
// console.log(getDay("12/07/2016"));
// console.log(getDay("09/04/2016"));
// console.log(getDay("12/08/2011"));
