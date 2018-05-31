http://ryanmorr.com/understanding-scope-and-context-in-javascript/


var person = "roht" 

function whatIsThis() {
	return this
}

function variable (){
	this.person = "max"
}
variable()

//When I run this.person it will attach value to the global object which is a bad practise (since this have global scope)

//We can use this here since we have declared it in global context 
console.log(person)

whatIsThis()

//In ES5 strict mode was added 
//when enabled
//this.person is undefined if we "use strict"



//----x----x----
//Implicit + object 
//---x---x----

//Rule-> Value of "this" woould always be the closest global/parent object
//Rule-> 2

var person = {
	firstName: "Rohit",
	addHi: function() {
		return "Hi" + this.firstName
	},
	check: function() {
		return this === person  //this is in global window/scope
 	}
}

person.addHi();
person.check(); //this returns True

//Here we are using it inside an object
//When invoked in this manner, the value of this within the scope of the function will be set to the newly created instance:


//for example in nested objects 
var person = {
	firstName: "Rohit",
	addHi: function() {
		return "Hi " + this.firstName
	},
	check: function() {
		return this === person 	
		}, 
 	dog: {
 		addHello: function() {
 			return "hello " + this.firstName;
 		},
 		
 		check: function() {
		return this === person;
 		}
 		
 	}
}
person.addHi();
person.check();
person.dog.addHello()
//In this, We have nested addHello and check: function inside dog
//Also Since the rule says Value of "this" woould always be the closest global/parent object

hence the output would be 
"Hi Rohit"
"true"
"hello undefined"
"false"



//To fix this we use, explicit change of value of this using call, Apply and Bind




//---------
//Call, Blind, Apply (explicit Binding)
//Important Note: 

//Rule -3 We chose what we want the value of call, blind and apply to be..
//can only be used in function





//-------
//Using call method

var person = {
	firstName: "Rohit",
	addHi: function() {
		return "Hi " + this.firstName
	},
	check: function() {
		return this === person 	
		}, 
 	dog: {
 		addHello: function() {
 			return "hello " + this.firstName;
 		},
 		
 		check: function() {
		return this === person;
 		}
 		
 	}
}

person.addHi();
person.check();
person.dog.addHello.call(person)


//Using Apply
//------
//Note - Apply only take two methods/Parameters
//We see difference between Call And apply when we start adding numbers

var person = {
	firstName: "Rohit",
	addHi: function() {
		return "Hi " + this.firstName
	},
	check: function() {
		return this === person 	
		}, 
 	dog: {
 		addHello: function() {
 			return "hello " + this.firstName;
 		},
 		
 		check: function() {
		return this === person;
 		}
 		
 	}
}
person.addHi();
person.check();
person.dog.addHello.apply(person)


//----
//Example of call vs apply 

//consider this function


var colt = {
	firstName: "rohit",
	funcAdd: function(a,b,c,d,e) {
		return this.firstName + "just calculated" + (a+b+c+d);
	}
}

var elie = {
	firstName: "elie"
}

colt.funcAdd(1,2,3,4); 
colt.funcAdd.call(elie,1,2,3,4)
colt.funcAdd.apply(elie,[1,2,3,4])


//----
//Bind
//---
//Important Note: You can set this to a custom value with .call(), .apply() or .bind()


//With- Bind, we do not need to know all arguments upfront 
//Bind Example 

//***Use case 1 

var colt = {
	firstName: "rohit",
	funcAdd: function(a,b,c,d,e) {
		return this.firstName + "just calculated" + (a+b+c+d);
	}
}

var elie = {
	firstName: "elie"
}


var elieCalc = colt.funcAdd.bind(elie, 1,2,4)
elieCalc(5)
//here we sent arguments at later stage as well 


//***use case 2 with "this" keyword
//***tricky 
//**Bind in the wild (with this)

var colt = {
	firstName: "rohit", 
	sayHI: function() {
		setTimeout(function(){
			console.log("hi" + this.firstName)
		}, 3000)
	}
}

// Here when this.firstName runs, it starts referring to the global context since the function is already executed. So how do we solve them?
// We can use call and Apply but call and apply evoke the function right away
// Hence we use bind 
// Bind method returns function defination

var colt = {
	firstName: "rohit", 
	sayHI: function() {
		setTimeout(function(){
			console.log("hi" + this.firstName)
		}.bind(this), 3000)
	}
}

//this would be evoked when the function runs 


//-----
//----New Keyword 
//-----

//fourth rule
//When new keyword is used, new object is created 
//Example, Consider funciton 

function Person(firstName, lastName) {
	this.firstName = firstName
	this.lastName = lastName 
}

//Previously we studied/wrote that this would point out to the global space but when we create an object like this.. 

var elie = new Person("rohit", "Bhatia");

//but when we create a new object using the function (or new keyword) this refers to the function
//you can set this to a custom value with .call(), .apply() or .bind()


//--------------------
//--------------------
//Consructor
//--------------------
//--------------------


//---x----x----x-----x-----
//Multiple Constructor 
//----x-----x--------x----

//To avoid multiple copying of function for example 

function Car (name, model, year) {
	this.name = name;
	this.model = model 
	this.year = year
	this.numberOfWheels = 4
}

function Bike (name, model, year) {
	this.name = name;
	this.model = model 
	this.year = year
	this.numberOfWheels = 2
}
//notice the amount of copying done here, we can overcome this by 
//In order to avoid this, we can do something like this 

function car (name, models, year) {
	this.name = name;
	this.model = model 
	this.year = year
	this.numberOfWheels = 4
}

function bike (name, models , year) {
	car.call(this, name, models, year) 
	this.numberOfWheels = 2;
}



//--------------------
//--------------------
//Prototype
//--------------------
//--------------------

//consider a circle as a function and box as an object 
//every construction function have a property called prototype which is an object (box)
//the prototype have a property on it called constructor which points back to constructor function (circle)
//Anytme an object is created using the "new" keyword, a property called _proto_ is created linking the property and prototype function of that constructor function

//for example, we use prototype to avoid duplicatoin of code or loading the same code and content on to the memory everytime. 

function vehicle(make, model, year) {
	this.make = make; 
	this.model = model 
	this.year = year 
	this.IsRunning = false;
} 

vehicle.prototype.TurnON = function() {
	this.IsRunning = true;
}

vehicle.prototype.TurnOff = function () {
	this.IsRunning = false;
}

vehicle.prototype.honk = function () {
	if (IsRunning) {
		return "beep";
	}
}


//Another example
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person.prototype.nationality = "English";

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

//when we console log myFather we won't get nationality because we don't get it directly from person rather we get it from prototype. when you debug it only prints its own properties (in other words, it won)


//isProtoypeOf







