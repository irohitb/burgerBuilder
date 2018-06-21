//

In react
//Updating happens from top to bottom and only when state or props change
//In react when using custom tag, Always USE Uppercase starting letter
//Using an arrow function in render creates a new function each time the component renders, which may have performance implications

//Important Article About React
//https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/questions/4290876

//Ref:
//---x---x---
//Ref won't work on functionnal components
//-------------
//-------------

//stateless component is always impure component


//Errors
if you get an error which states something like this
"Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
This means we might be calling something in render i.e  you call some method in render() which does (indirectly) update the state via setState(), you enter an infinite loop because an updated state will call render() and vice versa.




//-----Index-----------//

1. Props
	--> props Children
	--> Spread operaor syntax in react

2. Instance In React

3. Wrapping Element

4. Structure of Import and export

5. Rendering

6. Pure Function in Javascript

7. Pure Component vs COmponent  (class vs function)
	--> What is PureComponent

8. HOC
	--> Two ways of using HOC

9. Possible Understanding of Export Statement with Brackets

10. When to use render and when not to do

11. Wrapper in HOC

12. HTML and JSX and about return Statement

13. HOC in depth/about Hoc

14. Inline stylng in react

15. Understanding React updating stratergy

16. HOC examples

17. Have multiple class name

18. Two Wrapper component(continutation of Multiple Classes)

19. Adding an image in React

20. Responsive design styling (overwriting css when passing the child into props)

21. When to use Stateful component (includes function inside stateless component)

22. Adding Props Validation to react functional components

23. When to use which lifecycle hooks
 	--->Using setState in componentDidMount
	//https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/questions/4022072



React: Understanding Props
//---xxx-----
//Props are how components talk to each other.
//props flow downwards from the parent component.
//Data flow from parent to child
//Props.children
//---x----x-----x
//It is used to pass the content between the opening and closing tag (for example <Person> Shivom </Person>, We will use this props.children to pass shivom, NOw Instead of Shivom, We can also pass HTML Code)
//The vanilla JavaScript rule is,  a return statement can only return one thing.
//That one thing can be an array,  an object,  or React's >JSX case,  a <div> that contains multiple DOM elements.
//In react: onClick() invoker's event & arguments will flow from the child to its parent.
//-------------
//-------------

Spread Operator Synatx in react
https://stackoverflow.com/questions/42811882/what-does-three-dots-do-in-reactjs/42811937#42811937

2
//Instance in React
//----x---x---x----

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
//-------------
//-------------

3
// In react, we refer to wrapping element as..
//-----x----
<div> -> Inside content  </div>
For example this is the wrapping element..
<div className={classes.person}>
<p onClick={this.props.click}> Hey, I am {this.props.name}{this.props.children} and my age is {this.props.age} </p>
<input type="text" onChange={this.props.changed} value={this.props.name} />
</div>
//We can return Array of elements but not elements sitting next to each other -> refer to -> component -> Intenrals -> mod4 -> Lecture 13


4
//Understanding the Structure of import and export
//-------
//In react, Inside App.js return statement, we enclose it inside a class name and then do something like Cperson
//this Cperson comes from import we did at start (import Cperson from '../components/person/person.js';)
//Cperson is also default
//and hence in return it returns component->cockpit->Cperson into App.js
//-------------
//-------------


5
//Rendering
//------
//To understand area, re->rendered
//Chrome -> Inspect -> three buttons -> Rendering -> Show paint area -> This paint everything which is re-rendered
//-------------
//-------------


6
//Pure Function in Javascript
//--------
//Pure functions have two characteristics that are important.
//1. when they are given the same input they will always return the same result.
//2. When you write a pure function, the function does not modify variables that are outside of their scope.
//-------------
//-------------


7
//PureComponent vs Component
//------
When to use Component or PureComponent
//PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won’t compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.
https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81
https://medium.com/front-end-hacking/using-a-purecomponent-in-reacts-262972f9f1e0

//PureComponent does shouldComponentUpdate checks hence using it frequently for unecessary checks can actually cost us more than gain
//The major difference between the both comes down to shouldComponentUpdate
//By default, When we extend a class component, it sets shouldComponentUpdate return value to True which means it will render everything, every time state changes (or props).
//This causes unnecessary render, One way to overcome this problem is to use condition to check when your component needs to render in components.
//For example like this (this is a shallow comparison, continue reading even if you don't know what s a shallow comparison)
shouldComponentUpdate (nextProps, nextState) {

    console.log("[Update App.js] Inside should Component Update")
    console.log(nextProps)
    console.log(nextState)
    //this should return True or False -> True Rendering updating continues, False -> Updating and rendering stops
    return nextState.person !== this.state.person ||
    nextState.showPerson !== this.state.showPerson
}
//PureComponent by default will call shouldComponentUpdate and run a shallow comparison of props and state determining whether or not render should be invoked.//
//But PureComponent will only do a very shallow check, You can't expect react to do Deep Nested check for objects and array you hence we say it to be shallow check.
//Note: To understand in sort of a simpler terms, shallow quality check means that JS only checks that the value’s object ids (as in, the memory address for where JS stores the information for that particular object) are the same, not that their content is the same. On the other Deep quality check would be looping through every element to see if they are equal or not
//You can further read more about this here: https://reactjs.org/docs/shallow-compare.html

When comparing previous props and state to next, a shallow comparison will check that primitives have the same value (eg, 1 equals 1 or that true equals true) and that the references are the same between more complex javascript values like objects and arrays.
//-------------
//-------------


8
//HOC Overview
//----x-----x
//---x---x--- -> More understanding required
//High order component (HOC) is a function that takes a component and returns another component.
const RowWrapper = props => props.children.map(child => <div className='row>'{child}</div>)
App = () =>
    <RowWrapper>
        <input />
        <div>some text</div>
        <SomeComponent />
    </RowWrapper>

//RowWrapper will return components inside it with className property set to 'row'. -> Always row?
//In withclass.js HOC, when we returned funcional component we did something like return (props) => () which is functional component, also we returned something in these () insted of {}
//When we extend stateful component like class, we have to use this, Also it is annynomous class {}
//-------------
//-------------

There are two ways of using HOC
//We use it through JSX for example
<Aux> <> Content </Aux> </>
second way is wrap around export statement
export defauly HOC(App.js)


9
//Possible Understanding of Export Statement with Brackets
//---x----x---
//We imported something in case of HOC, we imported withclass.js like this..
//import withClass from '../hoc/withclass.js';
//Now this only returns another function hence it does not qualify as JSX so we can't use it app.js return statement
//Now withclass.js requires two parameters so we pass these arguments in export default statement like this
//export default withClass(App, classes.App);
//-------------
//-------------


10
//When to  use render() { return (...) } syntax to render a JSX code using functional component
//---x---x---
 //render() is part of the React class.  ->  You don't use it inside a functional component.
 //const MyComponent = () => ( ... );  Note:  If you use outer parenthesis,  you don't use the return.
 //const MyComponent = props => ( ... );  Note:  If you use outer parenthesis,  you don't use the return

///--- Above the render() area,  I call the methods area.   I've not heard a proper name for it.
From top to bottom I place the following:  default properties,  state,  CSS style objects,  lifecycle methods,
my custom methods.
---------------------------------------------------------------------------------------------------------------------------------------------------
#2)  In the top render() area,  I place logic I want to invoke during each render.
              map() to generate DOM elements,  if statements,  not methods,  some variables,  ...
       Try not to overload the render() area with logic.   Use the methods area.
       The React docs state,  the render() area should be pure.   Meaning,
              avoid altering the state from the render() area.
---------------------------------------------------------------------------------------------------------------------------------------------------
#3)  In the render()s return area,  I place JSX,  HTML,  injected JavaScript variables inside the { ... }.
Inside the { ... } can be,  a ternary operator,  this.state.isTrue && <div>True</div>,
         this.state.myProperty,  this.props.myProperty,  ...
---------------------------------------------------------------------------------------------------------------------------------------------------
I state "I" (first person) because,  some of my statements are subjective






11
 //Wrapper is a higher order component (HOC)
 //---x----
 /*You can have <MyWrapperComponent />,  but this can't wrap until you make it an open/close tag version.
.<MyWrapperComponent></MyWrapperComponent>.   Now you can wrap something inside it.
<MyWrapperComponent><MyChildren /></MyWrapperComponent>
const MyWrapperComponent = props => props.children;
export default MyWrapperComponent;
<MyChildren /> is props.children.   omponent wrapped content is children of the wrapping component.
Example:  <MyWrapperComponent>Hello</MyWrapperComponent>
Hello is props.children of the MyWrapperComponent component.   */
//-------------
//-------------



12
//React -> HTML and JSX
//Note: About Return Statement
//---xxx------
//. React use a syntax called JSX which thanks to compilers as Babel it is tanspiled JSX code in javascript.
// For example
//return [ <p />, <p className="hello" /> ]; -> This is JSX code
//this becomes this after conversion
//return [React.createElement("p", null), React.createElement("p", { className: "hello" })];
//----- Now note about Return Statement
//In Javascript, we can't return HTML Attribute, CSS and Style
//CSS class, style and HTML attributes only make sense in the context of an HTML element so hence we can't just return it
//-------------
//-------------





13
//About hOC
//----x----x---
//Higher order components (HOC) are used to pass data (in there own way).
//For Example:    Example:   If you have 10 components that are going to have some common data, instead of adding this common data to all of the components,  just add that data to (one) HOC,  then, wrap each of the 10 components inside that HOC.   This data can be a CSS style. You can create new data inside the HOC,  or the HOC can capture some external data,  then, pass that data to the 10 components.
//This means it is a function that takes as its first argument a component and then returns a component
//HOC Understanding


//Example2______ (Difficulty Medium)

 const yell = (PassedComponent) => //This is our HOC
  ({ children, ...props }) =>
    <PassedComponent {...props}>
      {children.toUpperCase()}!
    </PassedComponent>

const Title = (props) => <h1>{props.children}</h1>

const AngryTitle = yell(Title)
<AngryTitle>Whatever</AngryTitle>
//=> <h1>WHATEVER!</h1> */




14
//Inline Styling in React
//  myContainerStyle={maxWidth:'400px', margin:'10px auto', padding:'5px 0 0',
    /*    backgroundColor:'#ddd', textAlign:'center', border:'1px solid #000'};
    render() {
        return (
            <div style={this.myContainerStyle}>
                <MyChildOne myChildProps={this.state.myPropertyOne} />
                <MyChildTwo myChildProps={this.state.myPropertyTwo} />
            </div>
        );
*/


//Why we can't use "this" in Fuctional Components
//-----x-----x---
//


15
//Understanding React Updating Stratergy
//-----x----x------x----x------x-
//-----x------x------x----x------
//Test 1
//We create a test in class in HOC -> test.js
//Code
//........

import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';



class test2 extends Component {
  render () {
      console.log( '[Persons.js] Inside render()' );
        return (
        <div>
            <p> Do nothing </p>
            </div>
          )

          }
        }
export default withClass(test2, classes.Person)

//Since we have console.log in withClass.js we notice that console.log appears first

//-----> Note in our App.js we did something like this
//Added console.log everywhere
//We did import like this
//import React, { PureComponent } from 'react';
//import classes from './App.css';
//import Cockpit from '../components/Cockpit/Cockpit.js';
//import Aux from '../hoc/Aux';
//import withClass from '../hoc/withClass';
//import Persons from '../components/Persons/Persons.js';

//Our App.js return

    return (
      <Aux>
        <button onClick={() => { this.setState( { showPersons: true } ) }}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </Aux>
    );


//And then After return

console.log("----------")
console.log("This is App")
console.log(App)
console.log("This is Classes ")
console.log(classes)
console.log("This is Persons")
console.log(Persons)
console.log("This is Cockpit")
console.log(Cockpit)
console.log("This is Aux")
console.log(Aux)
console.log("This is withClass")
console.log(withClass)
console.log("----------")

//Conclusion
//First one to log was test1 and person.js sice that did export default withClass(//Whatever)
//This happens because our Persons.js imports test.js and person.js which import withClass and in the end when they export basically they call withClass HOC (and passes the parameter)
//Everything in the console.log before Class App.js
//Everything after class App.js
//Class.js after export
//WrapComponent Again
//Console.log -> Inside Aux
//Console.log -> Inside Cockpit
//console.log -> Inside Person.js
//-----x----x------x----x------x-
//-----x------x------x----x------



//Interesting example about HOC
//-------
///------
//This is our withClass HOC

const withClass = (WrappedComponent, className) => {
   return class extends Component {
       render () {
           return (
               <div className={className}>
                   <WrappedComponent {...this.props} />
               </div>
           )
       }
   }


//Suppose we have button component
// -> Button Component -> <Button colour="red"/>
//We want to wrap it with a div
//So we do something like this
//const ButtonWithClass = withClass(Button, "button-class");
//this will pass button and button-class to our HOC
//Hence our


16.
//HOC Example
//-----x-----x------x------x----
//Difficulty Moderate

//Initial Code

const yell = (PassedComponent) =>
  ({ children, ...props }) =>
    <PassedComponent {...props}>
      {children.toUpperCase()}!
    </PassedComponent>
const Title = (props) => <h1>{props.children}</h1>
const AngryTitle = yell(Title)
<AngryTitle>Whatever</AngryTitle>
//=> <h1>WHATEVER!</h1>

//Translated code
//Final Code

import React from 'react';
import ReactDOM from 'react-dom';

const yell = PassedComponent => ({children, ...props}) => {
    return (
        <PassedComponent {...props}>
            {props.myAngryTitleProps}, {children.toUpperCase()}
        </PassedComponent>
    );
};


const Title = props => (<h4>{props.children}</h4>);

const AngryTitle = yell(Title)

console.log(AngryTitle)

const App = () => (<AngryTitle myAngryTitleProps="My AngryTitle props">Whatever</AngryTitle>);

ReactDOM.render(<App />, document.getElementById('root'));
*/

//Code Explanation
//Run this in Index.js
const yell = PassedComponent => ({children, ...props}) => {  -> This is HOC -> We can write it like this as well ->

//Simplyfying
const yell = (PassedComponent) => {
    return ({ children, ...props }) => {
        return (

//More Simplyfying
const yell = PassedComponent =>
 return (props) => {
    return (
        <PassedComponent {...props}>
            {props.myAngryTitleProps}, {props.children.toUpperCase()}
        </PassedComponent>
    );
};

//Here
    return ({ children, ...props }) =>
//We are doing //Destructuring
 //Hence if we remove children and props.children, it will still work

//About the above code
//App will render becaus of ReactDom render
//AngryTitle gets call when it reaches const App  = () => AngryTitle
//This would call yell with Title as argument
//First yell console.log will execute (in line 5),
//Then when we  do  <PassedComponent  -> Title will execute
//-----x----x------x----x------x-
//-----x------x------x----x------




17.
Having Multiple ClassName in react
// consider this
 className={[Classes.Button, Classes[props.btnType]].join(' ')}
//Here we are getting first className from our .css and secon class name is passed to us
//This is an array, Which is joined to make a string
//-----x----x------x----x------x-
//-----x------x------x----x------


18.
Multiple wrapped component
//Refer to the commit 24 or Implementing the Burger Component lecture
//In above example, we are getting our btnType from props  i.e
 className={[Classes.Button, Classes[props.btnType]].join(' ')}
//Now there are many ways to get the props but one of the way is
    <Button btnType="Danger"  clicked={props.purchasingHandlerClose}>Cancel </Button>
		<Button btnType="Success"  clicked={props.purchaseContinueHandler}> Order</Button>
//In above example if cancel Button would be clicked then btnType Danger would be passed and similarly props associated with clicked
//-----x----x------x----x------x-
//-----x------x------x----x-----



19.
Adding an image in React
import React from 'react';
import Burgerlogo from '../../assests/burger-logo.png';
import Classes from './logo.css';
const logo = (props) => {
  return (
  <div className={Classes.logo}>
    <img src={Burgerlogo} alt="MyBurger"/>
  </div>
  )
}

export default logo;

//Here we imported BurgerLogo which is our image
//then we passed it as src={BurgerLogo}
//Note React automatically recognize .png as an image just like for CSS and when we pas BurgerLogo it would know that it is an image
//-----x----x------x----x------x-
//-----x------x------x----x-----


20.
Responsive design styling (overwriting css when passing the child into props)
//-------
Commit 30 -> Making burger
even though we have defined height in our logo.css, we did inline-styling
//i.e in our logo.js  we added -> style={{height: props.height}}>
<div className={Classes.logo} style={{height: props.height}}>
 <img src={Burgerlogo} alt="MyBurger"/>
</div>
//Inline Style will overwrite the externa css style and then we can pass the respective height from navbar and sidedrawer (where our logo is used)
//We can also wrap this under a div and give div an inline heigh (ex - <div style={{height: 11%}}> <logo /> </div>) -> This should also work

22.
Adding Props Validation to react functional components
//-------
George  · 4 months ago
Just in case its helpful for anyone who might not be too familiar with Javascript, you can add proptypes to functional components by simply adding the propTypes object to the function. ie,

import React from 'react';
import PropTypes from 'prop-types';

const burger = (props) => {
    // code in here
};

burger.propTypes = {
    myProp: PropTypes.any,
};

export default burger;
