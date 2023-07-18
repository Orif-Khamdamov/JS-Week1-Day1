## **Lecture 3 - Review**

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

**Метод массива Shift**

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
