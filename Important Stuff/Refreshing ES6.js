//React Instructions
//Revising ES6
//-------------
//--------------

//To read
 ES8 Async/Await


////Note: objects and array are reference type
/// To read object Destruction, Reference in primative type
///We can't use if-statements and variables directly inside the class
//A constructor being used inside the class is called using this.construcor name (rember inheritance and rendering is inside a class)

//-------------
// Index
//-------------

1. Ternary Expression

2. Variable Scope

3. Splice vs Slice Method
	---** Splice Method
	---** Slice Method

4. arrow function
	---** Object Constructor
	---** function returniing function or return function
	---** CallBack function
	---** Prototype Inheritance
  ---** {()=> (this.whatever)} vs {this.whatever}

5. Clases
	---** Instance of a class
	---** Passing Classes
	---** Inheritance in CLasses
  ---** function () {} vs function = () => {}

6. New Operator
	---** Spread and Rest operator

7. Destructuring

8. In operator in Javascript

9. Instance and object

10. Static vs Instance Method

11. Prototypal Inheritance
	---** Differential Inheritance
	---** Object.create()
	---** Subclassing

12. Blind

13. Partially blind function

14. Object.map

15. Object.keys

16. ForEach

17. .filter

18. reduce()

18. FInd and Find Index -> Array

19. Array concat()

20. Dot notation vs []

21. Object vs array

22. for...in

23 Array.join

24. Promise in Javascript (lazy Evaluation)
	----> .then()
	----> .resolve()


//------------------------
//------------------------
//------------------------









1.
///ternary expression -> Google Search
//--- Static Method -> Method which is not attached to single instance





2.
//ECMAScript 6 Variable Scope
//------------
//****---****---
(ES6/ES2015) introduced the let and const keywords that support the declaration of block scope local variables. This means the variable will be confined to the scope of a block that it is defined in, such as an if statement or for loop and will not be accessible outside of the opening and closing curly braces of the block. This is contrary to var declarations which are accessible outside blocks they are defined in. The difference between let and const is that a const declaration is, as the name implies, constant - a read-only reference to a value. This does not mean the value is immutable, just that the variable identifier cannot be reassigned
When called as an unbound function, this will default to the global context or window object
//------
//Intesting links -> http://ryanmorr.com/understanding-scope-and-context-in-javascript/
//------------------------
//------------------------
//------------------------





3.
//Slice Method vs Splice method
//--------------
//****---****---

1.the splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object
2. The splice() method changes the original array and slice() method doesn’t change the original array.
3. The splice() method can take n number of arguments


//Splice Method
//----------
Argument 1: Index, Required. An integer that specifies at what position to add /remove items, Use negative values to specify the position from the end of the array.

Argument 2: Optional. The number of items to be removed. If set to 0(zero), no items will be removed. And if not passed, all item(s) from provided index will be removed.

Argument 3…n: Optional. The new item(s) to be added to the array.

//----------
var array=[1,2,3,4,5];
console.log(array.splice(2));

console.log(array);
// shows [1, 2], original array altered.

var array2=[6,7,8,9,0];
console.log(array2.splice(2,1));
// shows [8]

console.log(array2.splice(2,0));
//shows [] , as no item(s) removed.

console.log(array2);
// shows [6,7,9,0]

var array3=[11,12,13,14,15];
console.log(array3.splice(2,1,"Hello","World"));
// shows [13]

console.log(array3);
// shows [11, 12, "Hello", "World", 14, 15]


//Slice Method
//----------
var array=[1,2,3,4,5]
console.log(array.slice(2));
// shows [3, 4, 5], returned selected element(s).

console.log(array.slice(-2));
// shows [4, 5], returned selected element(s).
console.log(array);
// shows [1, 2, 3, 4, 5], original array remains intact.

var array2=[6,7,8,9,0];
console.log(array2.slice(2,4));
// shows [8, 9]

console.log(array2.slice(-2,4));
// shows [9]

console.log(array2.slice(-3,-1));
// shows [8, 9]

console.log(array2);
// shows [6, 7, 8, 9, 0]
//------------------------
//------------------------
//------------------------




4.
//arrow function
//--------------
//****---****---
const myfunc = () => {
}
const myName = name -> {
	console.log(this.name);
}
myName(rohit)
//we can emit parenthesis if we are passing only one argumet
//function which does not recieve any arguments, we need parenthises
const multiply = (number) => return number*2;
 //or
const multiply = number => return number*2;
multiply(2);
//if all we do in our app is to return, then we can write it like this.
const aux = (props) => {
  return props.children
}


//Object Constructor
//-------------
//BluePrint for the object or this is object constructor function
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

//Creating an object
var myFather = new Person("John", "Doe", 50, "blue"); //-> This is an object

//To add property to the exsisting Object
myFather.nationality = "English";

//You can't add new property like this
Person.nationality = "English";

// Add a name method to first object
myFather.name = function() {
    return this.firstName + " " + this.lastName;
};

// Display full name
document.getElementById("demo").innerHTML =
"My father is " + myFather.name();

//Some In-built Javascript Constructor
WebLink: -> www.w3schools.com/js/tryit.asp?filename=tryjs_object_constructor_builtin


//function returniing function or return function
//--------------

//React Example

const aux = (props) => props.children;
//Curly brackets aren’t required if only one expression is present.
//About callback function


//CallBack function -> article -> https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
//-------------
//Callback brief example
//function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}
function alertFinished(){
  alert('Finished my homework');
}
doHomework('math', alertFinished);

//If you console.log this -> You get
//Starting my maths homeworkk
//Finished my homework


//Prototype Inheritance
//----------------------

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";

Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};


//Higher order function -> Function that accepts function as an argument

//{()=> (this.whatever)} vs {this.whatever}
{this.whatever} is not same with {this.whatever()}
In javascript (and most of other languages) to execute a function you need parenthesizes. If you use  {this.whatever} you pass down a function as a parameter to a prop and when user clicks the passed function will be fired.
Below is the sample code showing difference.

const whatever = () => {
  return "I log from function";
}

console.log(whatever); -> This will log function
console.log(whatever()); -> This will log the value "I log from function"

Note: whenever you put the parenthesis after a function you're running it, onClick will become the return value of whatever
//------------------------
//------------------------
//------------------------



//Imports and Exports
//-----





5.
//Class in Javascript
//-------
//****---****---
//Note:
An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a
//classes are blueprint for object
//classes can have methods and properties
//Methods -> Functions attached to classes
//Important Learning -> https://stackoverflow.com/questions/49806928/react-failed-to-compile/49808732#49808732

class person {
	name = 'Max',
	call -() => {
	}
}

//class is instantiated like this
var newClass = new person()
newClass.call()
console.log(newClass.name);
//this would log Max in console.
//Note: Variables can't be created inside the class'


//Examples
//properties are added by adding constructor, that is defualt function method where we can set properties

class Person() {
	constructor() {
		this.name = 'max'
	}
	printMyname = () => {
		console.log(this.name)
	}
}

//we can store instance in constant
const person = new Person();
person.printtMyname();
//this will console.log max

//Instance of a class
//---------

To understand what an instance is, we must first understand what a class is.
A class is simply a modeling tool provided by a programming language for use in representing real world objects in a program or application.
The class is structured to accommodate an objects properties (member variables) and its operations (member functions/methods).
An Instance on the other hand is simply a variation of an object created from a class. You create an object variant (Instance) using a constructor which is a method within a class specifically defined for this purpose.
Consider a Car, if you wanted to represent it in your application you would define a class identified as Car which contains the properties of the car and the operations that the car can perform.
It would look something close to this, supposing it was done in Java programming language:-
public class Car{
    //the properties of the car
    private String make;
    private int year;
    private int gear;
    private int speed;
    ...

    //constructor used to create instances of the car
    public Car(String carMake, int yearManf){
        year = yearManf;
        carMake = make;
    }

    //Car Operation/methods

    public void setGear(int gearValue){
        gear = gearValue
    }
    public void applyBrake(int decrement){
        speed -= decrement;
    }
    public void accelerate(int increment){
        speed += increment;
    }
    ...
}
let honda = new car() //Will be instance


//Inheritance in CLasses
//------------------
//consider

class Person() {
	constructor() {
		this.name = 'max'
	}
	printMyname = () => {
		console.log(this.name)
	}
}

class Person extends Human {
constructor() { //how to avoid (1)
	super();
	this.gender = male;
	this.name = "shivom"; //we add super since we are using constructor
	}
	printMyname() {
		console.log(this.name);
	}
}
const person = new Human();
person.printtMyname(); //will work and console.log Shivom


//Passing Classes
//---------------------
const something = class extends anything {
}

//Functions are first class objects in javascript, which means they can be treated as values and passed around. The difference between const something = class... and class something... is that the first is a class expression (assigning a class like a value to a variable that can be passed around) and the second is a class declaration (declaring the class and giving it a name, but not assigning it to a variable)


//Note:  functions are hoisted (just as a var is) and classes are not (just like const and let are not). So function something() {} is available anywhere in the code, but const something = function () {}, class something {} and anything const are only available after the execution gets to their declaration


//Classes are used by react to create to components

//(1)
//How to remove constructor thing (ES7)
//You can skip
class Person {
	myProperty = "value"
		printMyname = () => {
			console.log(this.name); //ES7 thing
		}
}

//note
printMyname = () => {
		console.log(this.name)
	}
//Is same as

	printMyname() {
		console.log(this.name);
	}
Note:

//function () {} vs function = () => {}
The this  keyword is the difference. In the first approach, this  will always refer to the class/ component. In the second approach, this will refer to the caller of the method. If you bind it to an event handler, that caller will NOT be the class/ component

//------------------------
//------------------------
//------------------------





6.
//New Operator
//------------
//****---****---

//Spread and the rest operators
//" ... " -> This is how it is represented (with three dots)
// Used to split up array elements OR object properties (it takes out all elements and properties and distributes them)
//How it works

const oldA = ["1", "2", "3"]
const newA = [...oldArray, "4", "5"]
//console.log -> 1,2,3,4,5
//same for object

const oldObj = {name: "Rohit", age: "21"}
const newObj = {...oldObj, gender: "male"}

//if two object have same name, the later one will take precedence

function sortArgs(...args) {
	return args.sort();
}
sortArgs(1, 2, 3)



//------------------------
//------------------------
//------------------------




7.
//Destructuring
//------------
//****---****---

const numbers = [1,2,3]
[num1, num2] = numbers
console.log(num1, num2)
//1 and 2 would be answer

//Example 2
let obj = { first: 'Jane', last: 'Doe' };
let { first: f, last: l } = obj; // (A)
    // f = 'Jane'; l = 'Doe'

//Destructing in react example
const yell = PassedComponent => ({children, ...props}) => {
    return (
        <PassedComponent {...props}>
            {props.myAngryTitleProps}, {children.toUpperCase()}!
        </PassedComponent>
    )
//the above code is equivalent to
const yell = PassedComponent => (props) => {
    return (
        <PassedComponent {...props}>
            {props.myAngryTitleProps}, {props.children.toUpperCase()}
        </PassedComponent>
    );
};



//or
[num1, ,num3] = numbers
console.log(num1, num3)
//1 and 3 would be logged



//------------------------
//------------------------
//------------------------





8.
//In operator in Javascript
//-------------
//The in operator returns true if the specified property is in the specified object or its prototype chain.

var car = {make: 'Honda', model: 'Accord', year: 1998};

console.log('make' in car);
// expected output: true

delete car.make; -> //No Car make
if ('make' in car === false) {  -> // This will be false
  car.make = 'Suzuki';
}

console.log(car.make); //Suzuki



//------------------------
//------------------------
//------------------------




9.
//Instance and object
//---------------
//----**-----**---
//There's no real significant difference that should consume too much of your time.  There might be some fancy language that some people might take up a lot of spaces to write about, but at the end of the day, as far as a coder, developer, programmer, architect, is concerned, an instance of a class and an object mean the same thing and can often be used interchangeably.  I have never met anyone in my career that would be picky and spend half hour trying to point out the differences, because there's really none.  Time can be better spent on other development efforts.

//Objects are defination of something, instane are those things



//------------------------
//------------------------
//------------------------





10.
//Static vs Instance Method
//--------------
//----**-----**---

The basic paradigm in Java is that you write classes, and that those classes are instantiated. Instantiated objects (an instance of a class (object)) have attributes associated with them (member variables) that affect their behavior; when the instance has its method executed it will refer to these variables.
However, all objects of a particular type might have behavior that is not dependent at all on member variables; these methods are best made static. By being static, no instance of the class is required to run the method.
You can do this to execute a static method:

MyObject.staticMethod();//Simply refers to the class's static code
But to execute a non-static method, you must do this:

MyObject obj = new MyObject();//Create an instance
obj.nonstaticMethod();//Refer to the instance's class's code
//On a deeper level, when the compiler puts a class together, it contains several pointers to methods. When those methods are executed it follows the pointers and executes the code at the far end. If a class is instantiated, the created object contains a pointer to the "virtual method table", which points to the methods to be called for that particular class in the inheritance hierarchy. However, if the method is static, no "virtual method table" is needed: all calls to that method go to the exact same place in memory to execute the exact same code. For that reason, in high-performance systems it's better to use a static method if you are not reliant on instance variables.


//------------------------
//------------------------
//------------------------






11.
//Prototypal Inheritance
//----------------------
//----**-----**-----**--

In JavaScript, all functions are also objects, which means that they can have properties. And as it so happens, they all have a property called prototype
Any time you create a function, it will automatically have a property called prototype, which will be initialized to an empty object.
function Dog() {
}
Dog.prototype.bark = function() {
 console.log(‘woof!’);
};
var fido = new Dog();
fido.bark(); // ‘woof!’

//important thing to take away right now is that by placing bark on Dog.prototype, we made it available to all instances of Dog.

//Differential Inheritance
//-----------------------
//In the above example
fido.hasOwnProperty(‘bark’) === false
There’s really no such property as fido.bark. It doesn’t exist. Instead, fido has access to the bark() method on Dog.prototype because it’s an instance of Dog. This is the “invisible link” I mentioned. More commonly, it’s referred to as the “prototype chain”.

//This is Differential Inheritance / Prototype Chain /

//Object.create()
//---------------
var parent = {
 foo: function() {
 console.log(‘bar’);
 }
};
var child = Object.create( parent );
child.hasOwnProperty(‘foo’); // false
child.foo(); // ‘bar’

 //it creates a new, empty object that has parent in its prototype chain. That means that even though child doesn’t have its own foo() method, it has access to the foo() method from parent.

//SubClassing
//-----------
function Rectangle( width, height ) {
 this.width = width;
 this.height = height;
}

var rect = new Rectangle( 3, 4 );

//Prototype

Rectangle.prototype.area = function() {
 return this.width * this.height;
};

There’s that this keyword again. Just like in the constructor, this inside of a method refers to the instance.
rect.area();

//Subclassing
//-------
//In the above example, we want to create

function Square( length ) {
 this.width = this.height = length;
}
Square.prototype = Object.create( Rectangle.prototype );
All instances of Square will automatically have Square.prototype in their prototype chain, and because Square.prototype has Rectangle.prototype in its prototype chain, every Square will have access to the methods of Rectangle.
var square = new Square( 4 );

quare.area();
//------------------------
//------------------------
//------------------------





12.
//Bind()
//------
//---***---***---
The simplest use of bind() is to make a function that, no matter how it is called, is called with a particular this value. A common mistake for new JavaScript programmers is to extract a method from an object, then to later call that function and expect it to use the original object as its this

this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
//------------------------
//------------------------
//------------------------





13.
//Partially Applied function
//--------
//------------------------
//------------------------
//------------------------


14.
.map method
//------
//---***---***---

Map does not change the orginal values
The map() method creates a new array with the results of calling a function for every array element.
//Example
Multiply all the values in array with a specific number:

var array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);
//[2, 8, 18, 32]

//Mapping an array of numbers to an array of square roots
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);

//Using map to reformat objects in an array
var reformattedArray = kvArray.map(obj =>{
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;

   });
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]

//Mapping an array of numbers using a function containing an argument
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});

//------------------------
//------------------------
//------------------------




15.
Object.keys
//------
//---***---***---
Object.keys() returns an array whose elements are strings corresponding to the enumerable properties found directly upon object. The ordering of the properties is the same as that given by looping over the properties of the object manually.

var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr));
console: ['0', '1', '2']

var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
var myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
//------------------------
//------------------------
//------------------------


16.
 ForEach
//------
//---***---***---

//Before
const items = ['item1', 'item2', 'item3'];
const copy = [];

for (let i=0; i<items.length; i++) {
  copy.push(items[i])
}

//After
const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach(function(item){
  copy.push(item)
});

More: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

//------------------------
//------------------------
//------------------------





17.
.filter()
//------
//---***---***---
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);


//Filtering out all small values
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);


//Filtering invalid entries from JSON

var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var invalidEntries = 0;

function isNumber(obj) {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);


//Searching in array
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
//------------------------
//------------------------
//------------------------





18.
.disabledInfo()
//------
//---***---***---

const euros = [29.76, 41.85, 46.5];
const sum = euros.disabledInfo((total, amount) => total + amount);
sum // 118.11


In this example,
disabledInfo accepts two parameters, the total and the current amount.
The reduce method cycles through each number in the array much like it would in a for-loop.
When the loop starts the total value is the number on the far left (29.76) and the current amount is the one next to it (41.85).
In this particular example, we want to add the current amount to the total.
The calculation is repeated for each amount in the array, but each time the current value changes to the next number in the array, moving right.
When there are no more numbers left in the array the method returns the total value.

//Finding an Average with the Reduce Method In JavaScript​
const euros = [29.76, 41.85, 46.5];
const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) {
    return total/array.length;
  }else {
    return total;
  }
});
average // 39.37

//Tally Example using redue
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

const count = fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1 ;
  return tally;
} , {})

count // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

tally[fruit] = (tally[fruit] || 0) + 1 ;

//This here is a short circuit evluation
The use of the || here is called a short-circuit evaluation. This means that if tally[fruit] is truthy it will use its value, otherwise it will use 0 (and then add 1).


var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},initialValue)

console.log(sum) //Logs 6

Read about it here
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

//------------------------
//------------------------
//------------------------



19.
Array concat()
//------
//---***---***---

var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);
// ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]
//------------------------
//------------------------
//------------------------



20.
dot notation vs []
//---------
//-----****----****---
The bracket notation allows you to access properties by name stored in a variable:
var obj = { "abc" : "hello" };
var x = "abc";
var y = obj[x];
console.log(y); //output - hello

obj.x would not work in this case.

To read more
https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/questions/4392660
//------------------------
//------------------------
//------------------------



21
Object vs array
//---------
//-----****----****---
const myArray = []; is = const myArray = Array();
const myArray = new Array(5);    myArray is an array of five undefined array items.
The top answer highlighted this as a key point to share the difference between an array and object
Arrays are for numerically indexed data - for non-numeric keys, use an Object.
//------------------------
//------------------------
//------------------------



22.
for in javascript
//---------
//-----****----****---
var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
//------------------------
//------------------------
//------------------------



23
Array.join
//---------
//-----****----****---
The join() method joins all elements of an array (or an array-like object) into a string and returns this string.
var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// expected output: Fire,Wind,Rain

console.log(elements.join(''));
// expected output: FireWindRain

console.log(elements.join('-'));
// expected output: Fire-Wind-Rain


24.
Promise in JavaScript
//---------
//-----****----****---
Source -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous actions eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
check the image in the folder (promise.png)


then()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.

var promise1 = new Promise(function(resolve, reject) {
  resolve('Success!');
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "Success!"
});

//Syntax for then with promise
