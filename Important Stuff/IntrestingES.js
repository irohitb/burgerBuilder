ES6 arrow function Firefox docs
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Lexical_this

ES5 this keyword
https://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work


Es5 vs Es6
https://medium.freecodecamp.org/5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81

this in ES5 and ES6
https://medium.freecodecamp.org/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881

//Dynamically adding method to the object
var obj1 = {
    name: "obj1",
}

function returnName() {
    return this + ":" + this.name;
}

obj1.f = returnName; //add method to object
document.write(obj1.f()); //[object Object]:obj1


Prinitng B vs Prinitng #
//https://stackoverflow.com/questions/21947452/why-is-printing-b-dramatically-slower-than-printing/21947627#21947627


Innovocation Context vs Execut

This within ES6 Class
https://stackoverflow.com/questions/36489579/this-within-es6-class-method
Using of this keyword inside class method in ES7
https://stackoverflow.com/questions/51031012/using-of-this-keyword-inside-class-method-in-es7/51031188#51031188
Using Arrow function vs normal function in React
https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/questions/4562522


ES6 Functions Superiority
https://hackernoon.com/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4
