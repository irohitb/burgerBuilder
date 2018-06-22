//This -> Lexical in ES6

this (aka "the context") is a special keyword inside each function and its value only depends on how the function was called, not how/when/where it was defined. It is not affected by lexical scopes, like other variables. Here are some examples:

function foo() {
    console.log(this);
}

// normal function call
foo(); // `this` will refer to `window`

// as object method
var obj = {bar: foo};
obj.bar(); // `this` will refer to `obj`

// as constructor function
new foo(); // `this` will refer to an object that inherits from `foo.prototype
