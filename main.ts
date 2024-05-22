// what is array
// An array is a special type of data type
// which can store multiple values of different
// data types sequentially using a special 
//syntax.

//TypeScript supports arrays, similar
// to JavaScript. There are two ways to
// declare an array:
//1. Using square brackets. 
//This method is similar to how you
// would declare arrays in JavaScript.
//let fruits: string[] = ['Apple', 'Orange', 'Banana'];

//2. Using a generic array type,
// Array<elementType>.
let vegetable: Array<string> = ['Cabbage', 'Potato', 'Onion'];

//Arrays can be declared and 
//initialized separately.
let colors: Array<string>;
colors = ['Red', 'Orange', 'Yellow']; 

let numbers1: Array<number>;
numbers1 = [23, 34, 100, 124, 44]; 

//An array in TypeScript can contain
// elements of different data types
// using a generic array type syntax,
// as shown below.
let example: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']; //small bracket declared
// or 
let solution: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; //generic array type

//Accessing Array Elements:
//The array elements can be accessed using the index of an element
// e.g. ArrayName[index]. The array index starts from zero,
// so the index of the first element is zero, the index of the second 
//element is one and so on.
let boysname: string[] = ['Ali', 'Waseem' , 'Samran']; 
boysname[0]; // returns Ali
boysname[1]; // returns Waseem
boysname[2]; // returns Samran
boysname[3]; // returns undefined

//access array element using loops
// index in array
//starts with 0, 1,2 ,3 ,4, 5......
//address in array
// starts with 1, 2 ,3 ,4.....
let girls: string [] = ['areeba' , 'ayesha' , 'sumaira'];
console.log(girls[0]);
console.log(girls[1]);
console.log(girls[2]);
console.log(girls[3]);
console.log(girls[4]);

let mens: Array<number> = [20 , 30 , 40 , 45];
console.log(mens[3]);
console.log(mens[2]);
console.log(mens[1]);
console.log(mens[0]);

//Typescript array methods
//The following table lists all Array methods which can be used for different purposes.


//Method	Description
//pop()	Removes the last element of the array and return that element
//push()	Adds new elements to the array and returns the new array length
//sort()	Sorts all the elements of the array
//concat()	Joins two arrays and returns the combined result
//indexOf()	Returns the index of the first match of a value in the array (-1 if not found)
//copyWithin()	Copies a sequence of elements within the array
//fill()	Fills the array with a static value from the provided start index to the end index
//shift()	Removes and returns the first element of the array
//splice()	Adds or removes elements from the array
//unshift()	Adds one or more elements to the beginning of the array
//includes()	Checks whether the array contains a certain element
//join()	Joins all elements of the array into a string
//lastIndexOf()	Returns the last index of an element in the array
//slice()	Extracts a section of the array and returns the new array
//toString()	Returns a string representation of the array
//toLocaleString()	Returns a localized string representing the array

let fruits1: string[] = ['Apple', 'Orange', 'Banana']; 
fruits1.sort(); 
console.log(fruits1); //output: [ 'Apple', 'Banana', 'Orange' ]

console.log(fruits1.pop()); //output: Orange

fruits1.push('Papaya'); 
console.log(fruits1); //output: ['Apple', 'Banana', 'Papaya']

fruits1 = fruits1.concat(['Fig', 'Mango']); 
console.log(fruits1); //output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango'] 

console.log(fruits1.indexOf('Papaya'));//output: 2

//TypeScript provides a variety of array methods
// that you can use to manipulate and interact with arrays. 
//These methods are largely the same as those in JavaScript
// since TypeScript is a superset of JavaScript.
// Here are some of the most commonly used array methods in TypeScript:

//01 
//push()

//Adds one or more elements to the end of an array and
// returns the new length of the array.
let fruit2: string[] = ["apple", "banana"];
fruit2.push("orange"); // ["apple", "banana", "orange"]

//02
//pop()

//Removes the last element from an array and returns that element.
let fruit3: string[] = ["apple", "banana", "orange"];
let firstFruit = fruit3.shift(); // "apple"

//03 
//unshift()
//Adds one or more elements to the beginning of an 
//array and returns the new length of the array.

let fruit4: string[] = ["banana", "orange"];
fruit4.unshift("apple"); // ["apple", "banana", "orange"]

//04
//concat()
//Merges two or more arrays and returns a new array.
let fruits5: string[] = ["apple", "banana"];
let fruits6: string[] = ["orange", "mango"];
let allFruits = fruits5.concat(fruits6); // ["apple", "banana", "orange", "mango"]

//05
//slice()
//Adds or removes elements from an array and returns the removed elements.
let fruits7: string[] = ["apple", "banana", "orange", "mango"];
let removedFruits1 = fruits7.splice(2, 1, "kiwi"); // ["orange"]
// fruits is now ["apple", "banana", "kiwi", "mango"]

//06
// slice
//Returns a shallow copy of a portion of an array into a new array.
let fruits8: string[] = ["apple", "banana", "orange", "mango"];
let citrus = fruits8.slice(1, 3); // ["banana", "orange"]

//07
//splice()
//Adds or removes elements from an array and returns the removed elements.
let fruits9: string[] = ["apple", "banana", "orange", "mango"];
let removedFruits2= fruits9.splice(2, 1, "kiwi"); // ["orange"]
// fruits is now ["apple", "banana", "kiwi", "mango"]

//08
//forEach()
//Executes a provided function once for each array element.
let fruits10: string[] = ["apple", "banana", "orange"];
fruits10.forEach(fruit => console.log(fruit));

//09
//map
//Creates a new array populated with the results of calling a
// provided function on every element in the calling array.
let numbers2: number[] = [1, 2, 3, 4];
let doubled = numbers2.map(num => num * 2); // [2, 4, 6, 8]

//10
//filter
//Creates a new array with all elements that 
//pass the test implemented by the provided function.
let numbers3: number[] = [1, 2, 3, 4, 5];
let evenNumbers = numbers3.filter(num => num % 2 === 0); // [2, 4]

//11
//reduce()
//Executes a reducer function on each element of the array
//, resulting in a single output value.
let numbers4: number[] = [1, 2, 3, 4];
let sum = numbers4.reduce((acc, num) => acc + num, 0); // 10

//12
//find
//Returns the value of the first element
// in the array that satisfies the provided testing function.
let numbers5: number[] = [1, 2, 3, 4];
let found = numbers5.find(num => num > 2); // 3

//13
//findindex
//Returns the index of the first element in the array
// that satisfies the provided testing function.
let numbers: number[] = [1, 2, 3, 4];
let index = numbers.findIndex(num => num > 2); // 2

//14
//sort
//Sorts the elements of an array in place and returns the array.
let fruits20: string[] = ["banana", "apple", "orange"];
fruits20.sort(); // ["apple", "banana", "orange"]

//15
//reverse
//Reverses the order of the elements in an array in place.
let fruits30: string[] = ["apple", "banana", "orange"];
fruits30.reverse(); // ["orange", "banana", "apple"]

//16
//includes
//Determines whether an array includes a certain value among its entries.
let fruits: string[] = ["apple", "banana", "orange"];
let hasApple = fruits.includes("apple"); // true

