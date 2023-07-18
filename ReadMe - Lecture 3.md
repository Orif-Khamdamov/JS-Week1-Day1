## **Lecture 3 - Review**

**String метод charAt и at**

Метод charAt() возвращает указанный символ из строки. Метод at() также работает с отрицательными индексами

let a = "Hello Softclub"  
let b = a.charAt (1)  
let c = a.at (-3)  
console.log(b);  
console.log(c);  

**String метод concat**

Метод concat() объединяет текст из двух или более строк и возвращает новую строку.

let a = "Hello "  
let b = "guys"  
let c = a.concat(b)  
console.log(c);  

**String метод replace**

Метод replace() возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель. Шаблон может быть строкой или регулярным выражением, а заменитель может быть строкой или функцией, вызываемой при каждом сопоставлении.

let a = "Let's go to Cinema"  
let b = a.replace("Cinema", "Home")  
console.log(b);  

**String метод replaceAll**

Метод replaceAll() возвращает новую строку со всеми совпадениями pattern , который меняется на replacement. pattern может быть строкой или регулярным выражением, и replacement может быть строкой или функция возвращающая каждое совпадение.

Исходная строка остаётся без изменений.

'aabbcc'.replaceAll('b', '.');  
// 'aa..cc'

**String метод split**

Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.

let a = "Manchester United"  
let b = a.split(" ")  
console.log(b);  

**String метод substring (start, end)**

Метод substr() возвращает указанное количество символов из строки, начиная с указанной позиции.

const str = 'Mozilla';  

console.log(str.substr(1, 2));  
// Expected output: "oz"  

console.log(str.substr(2));  
// Expected output: "zilla"  

**String метод slice (start, end)**

Метод slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки.

const str = 'The quick brown fox jumps over the lazy dog.';  

console.log(str.slice(31));  
// Expected output: "the lazy dog."  

console.log(str.slice(4, 19));  
// Expected output: "quick brown fox"  

console.log(str.slice(-4));  
// Expected output: "dog."  

**String метод toLowerCase**

Метод toLowerCase() возвращает значение строки, на которой он был вызван, преобразованное в нижний регистр.

console.log('АЛФАВИТ'.toLowerCase()); // 'алфавит'

**String метод toUpperCase**

Метод toUpperCase() возвращает значение строки, на которой он был вызван, преобразованное в верхний регистр.

console.log('алфавит'.toUpperCase()); // 'АЛФАВИТ'

**String метод trim**

Метод trim() удаляет пробельные символы с начала и конца строки. Пробельными символами в этом контексте считаются все собственно пробельные символы (пробел, табуляция, неразрывный пробел и прочие) и все символы конца строки (LF, CR и прочие).

var orig = '   foo  ';  
console.log(orig.trim()); // 'foo'

**String метод includes**

Метод includes() проверяет, содержит ли строка заданную подстроку, и возвращает, соответственно true или false.

var str = 'Быть или не быть вот в чём вопрос.';  

console.log(str.includes('Быть'));       // true  
console.log(str.includes('вопрос'));    // true  
console.log(str.includes('несуществующий')); // false  

**String метод toString**

Метод toString() возвращает строку, представляющую указанный объект.

var x = new String('Привет, мир');  
console.log(x.toString()); // Отобразит 'Привет, мир'  

**String метод indexOf**

Метод indexOf() возвращает индекс первого вхождения указанного значения в строковый объект String, на котором он был вызван, начиная с индекса fromIndex. Возвращает -1, если значение не найдено.

'Синий кит'.indexOf('Синий');   // вернёт  0  
'Синий кит'.indexOf('Голубой');  // вернёт -1  
'Синий кит'.indexOf('кит', 0);    // вернёт  6  

**String метод repeat**

Метод repeat() конструирует и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки, на которой он был вызван.

'абв'.repeat(-1);   // RangeError  
'абв'.repeat(0);    // ''  
'абв'.repeat(1);    // 'абв'  
'абв'.repeat(2);    // 'абвабв'  

---
**Number метод Math.floor**

Метод Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого.

Math.floor( 45.95); //  45  
Math.floor(-45.95); // -46

**Number метод Math.round**

Метод Math.round() возвращает число, округлённое к ближайшему целому.

// Вернёт значение 20  
x = Math.round(20.49);  

// Вернёт значение 21  
x = Math.round(20.5);  

**Number метод Math.ceil**

Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.

Math.ceil(.95);    // 1  
Math.ceil(4);      // 4  
Math.ceil(7.004);  // 8  

**Number метод Math.max и Math.min**

Метод Math.max() возвращает наибольшее из нуля или более чисел.

Math.max(10, 20);   //  20  
Math.max(-10, -20); // -10  

Метод Math.min() возвращает наименьшее из нуля или более чисел.

var x = 10, y = -20;  
var z = Math.min(x, y);  

**Number метод Math.pow и Math.sqrt**

Метод Math.pow() возвращает основание, возведённое в степень показатель, то есть, значение выражения основаниепоказатель.

Math.pow(7, 2); // 49

Метод Math.sqrt() возвращает квадратный корень числа.

Math.sqrt(9); // 3  
Math.sqrt(2); // 1.414213562373095  

**Number метод Math.abs и Math.random**

Метод Math.abs() возвращает абсолютное значение числа.

Math.abs('-1');     // 1  
Math.abs(-2);       // 2  
Math.abs(null);     // 0  
Math.abs('');       // 0  
Math.abs([]);       // 0 

Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона. Реализация сама выбирает начальное зерно для алгоритма генерации случайных чисел; оно не может быть выбрано или сброшено пользователем.

function getRandomInt(max) {  
  return Math.floor(Math.random() * max);  
}  

console.log(getRandomInt(3));  
// Expected output: 0, 1 or 2  

console.log(getRandomInt(1));  
// Expected output: 0  

console.log(Math.random());    
// Expected output: a number from 0 to <1  

**Number метод isNaN**

Метод Number. isNaN() определяет, является ли значение NaN (Not-A-Number). Этот метод возвращает true, если значение имеет тип Number и является NaN. В противном случае метод возвращает false.

isNaN(NaN);       // true  
isNaN(undefined); // true  
isNaN({});        // true  

isNaN(true);      // false  
isNaN(null);      // false   
isNaN(37);        // false  

// strings  
isNaN("37");      // false: "37" преобразуется в число 37 которое не NaN  
isNaN("37.37");   // false: "37.37" преобразуется в число 37.37 которое не NaN  
isNaN("");        // false: пустая строка преобразуется в 0 которое не NaN  
isNaN(" ");       // false: строка с пробелом преобразуется в 0 которое не NaN  
isNaN("37,5");    // true  

---
**Array**

Массив в JavaScript — это упорядоченный список элементов с указанным индексом (ключом к ним). В отличие от остальных языков, где массив — это ссылка на несколько переменных, в JavaScript — это единственная переменная, в которой может храниться несколько элементов.

*Особенности массива в JS:*

- В массиве хранятся значения смешанных типов. То есть, массив может содержать в себе числа, строки и объекты других массивов.
- У длины массива — динамический характер. Нам не надо заранее указывать размер массива — он меняется (увеличивается/уменьшается) автоматически.
- Его применяют для содержания нескольких значений в одной переменной.

**Создание массива**

1-й способ. Используя форму массива:  
  const fruit = ["Ananas","Mango","Lemon"];

2-й способ. Используя ключевое слово new Array:  
  const fruit = new Array("Ananas", "Orange", "Lemon");

**Изменение массива**

Изменять или добавлять элементы массива можно путем указания его индексов:  
// Example 1  
let array = ["go", "sleep", "eat"]  
array [2] = "drink"  
console.log (array) // [ 'go', 'sleep', 'drink' ]  

// Example 2  
let array = ["go", "sleep", "eat"]  
array [3] = "walk"  
console.log (array) // [ 'go', 'sleep', 'eat', 'walk' ]

---
**Метод массива Push**

Метод push() добавляет новые элементы в конец массива.  

Добавим Lime к нашим фруктам:  
const fruits = ["Ananas", "Orange", "Lemon", "Plum"];  
fruits.push("Lime");  
//Новый состав фруктов  
 ["Ananas", "Orange", "Lemon", "Plum","Lime"];  

 **Метод массива Pop**
 
При вызове метода Pop() удаляется один элемент из конца массива.

const fruits = ["Ananas", "Orange", "Lemon", "Plum"];  
fruits.pop(); // удаляем сливу/Plum  
//Новый состав фруктов  
["Ananas", "Orange", "Lemon"];  

 **Метод массива Unshift**

Метод unshift() добавляет новые элементы, но уже в начало массива, и меняет его длину.

const fruits = ["Ananas", "Orange", "Lemon", "Plum"];  
fruits.unshift("Mango");  
// Результат  
["Mango","Ananas", "Orange", "Lemon", "Plum"];

**Метод массива Shift**

Метод shift() убирает первый элемент массива (длина массива меняется).

var fruits = ["Ananas", "Orange", "Lemon", "Plum"];  
fruits.shift();  
// Результат   
["Orange", "Lemon", "Plum"];  

**Метод массива toString**

Метод toString() преобразует объект в строковое представление. Метод автоматически вызывается JavaScript, когда объект нужно представить в текстовом виде.

**Метод массива indexOf**

Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.

var array = [2, 5, 9];  
array.indexOf(2);     // 0

**Метод массива includes**

Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.

const array1 = [1, 2, 3];  
console.log(array1.includes(2));  
// Expected output: true

**Метод массива slice**

Метод slice() возвращает новый массив, содержащий копию части исходного массива.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];  

console.log(animals.slice(2));  
// Expected output: Array ["camel", "duck", "elephant"]  

console.log(animals.slice(2, 4));  
// Expected output: Array ["camel", "duck"]  

**Метод массива concat**

Метод concat() объединяет один или несколько массивов, затем возвращает объединенный массив. Не меняет существующие массивы.

var alpha = ['a', 'b', 'c'],  
    numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);  

console.log(alphaNumeric); // Результат: ['a', 'b', 'c', 1, 2, 3]

**Метод массива splice**

Метод splice() помогает добавлять и убирать элементы в массиве.  Так, исходный массив модифицируется. Для добавления элемента с помощью splice(),  нужно обозначить позицию, в которую мы хотим добавить элементы.

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];  
var removed = myFish.splice(2, 0, 'drum');  

// myFish равен ["angel", "clown", "drum", "mandarin", "sturgeon"]  
// removed равен [], ничего не удалено  


var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];  
var removed = myFish.splice(3, 1);  

// removed равен ["mandarin"]  
// myFish равен ["angel", "clown", "drum", "sturgeon"]  

---
**Callback метод массива map**

К map() обращаются для создания нового массива из уже готового, применяя при этом функцию к каждому из элементов первого массива:

const numbers = [1, 4, 9];  
const roots = numbers.map(Math.sqrt);  
// теперь roots равен [1, 2, 3], а numbers всё ещё равен [1, 4, 9]

**Callback метод массива forEach**

Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.

const array1 = ['a', 'b', 'c'];  

array1.forEach(element => console.log(element));  

// Expected output: "a"  
// Expected output: "b"  
// Expected output: "c"  

**Callback метод массива find**

Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции. В противном случае возвращается undefined

function isPrime(element, index, array) {  
  var start = 2;  
  while (start <= Math.sqrt(element)) {  
    if (element % start++ < 1) {  
      return false;  
    }  
  }  
  return element > 1;  
}  

console.log([4, 6, 8, 12].find(isPrime)); // undefined, не найдено  
console.log([4, 5, 8, 12].find(isPrime)); // 5  

**Callback метод массива reduce**

Метод reduce() — инструмент, который сжимает массив до одного значения. Чтобы получить выходное значение, он запускает функцию редуктора для всех элементов массива:

var salary = [200, 310, 560];  

var sum = salary.reduce (function (total, amont) {  

return total+amount});  

sum// 1070  

**Callback метод массива filter**

Метод filter() фильтрует элементы по условию, указанному в функции:

const fruits = ['Ananas', 'Lemon', 'Orange', 'Lime', 'Plum'];  

const result = fruits.filter(word => fruit.length <5);  

console.log(result);  

Array ["Plum", "Lime"]  

**Callback метод массива toSorted**

Это усовершенствованный метод sort(), который создает новый массив , отсортированный в указанном порядке

const values = [1, 10, 21, 2];  
const sortedValues = values.toSorted((a, b) => a - b);  
console.log(sortedValues); // [1, 2, 10, 21]  
console.log(values); // [1, 10, 21, 2]  
