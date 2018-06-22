Note: In Index.css we setup global body style since rendor starts from Index.js and we import it in Index.js
//To change font-family from imported fonts from google -> Public -> Index.html
//We will use component to manage state and container for everything else
//<main> Tag is used to showcase main content
//IF we have two adjacent jsx element (we can't have), We have to use array and give each item a key
//Another alternate is create HOC -> It will server purpose of wrapping something and passing function
//Question to ask, Why didn't we used div?
https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/commit/8109010?start=0
//if we import react, can we use jsx anywhere?
//we can also add state using constructor(Props), super(props); this.state (this because we are inside a method)
//Burger project commit 11 to know how to pass states to functional component

//Burger Ingrident safe guarding.
https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/questions/3956582

More on CSS Modules
https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/commit/8111608

//Question.
//When we console.log(typeof array) -> Does it always logs it as an object

//To do
//Read flex properties (flex-flow, flex wrapper), display flex
..Read when do we use <Something> </something> and when do we use <something... />
.TO understand why do we make array of an object





//commit 5
//Css -> Npm run eject -> webpack -> Options
//Removed logo
//Removed most of the content from App.js
//Index.css change font
//removed App.css
//-------------------
//-------------------
//-------------------





//commit 6
//We can seperate our project into two parts
//Toolbar to navigate and the main burger builder
//We create a sub folder for layout
//We created Component and container -> we will create container in components because we don't need to manage any state
//In components -> Sub folder -> Layout -> in layout , layout.js file
//We create assests folder
//In layout.js, we use *main and there we will put component we will wrap with this content -> hence we will use props.children
//*We use this component as a wrapper around the core content component we want to render to the screen
//Now in main.js,we want have two adjacent element but since we cannot have two adjacet JSX element together, we create HOC named Aux
//Aux is simple -> Takes props and return props
//We import Aux to our Layout and layout to app
//Run the app afterwards
//-------------------
//-------------------
//-------------------





//commit 7
//Starting the implementation of the burger builder
//---x-x----x--x---
//This should actually be a container because here we need to manage the state of burger
//We created a new folder in container known as burger Builder
//Burger Builder contains Burger and Burger Controls
//We wrap it with Aux like we wrapped layout
//We imported it to App.js
//We wrapped it inside layout.js, Since we wrapped it inside Layout.js, We could add styling in Layout.css which will effect it since we are passing props.children
//We created layout.csss and added maegin of 16px
//Overflow: Scroll -> We can scroll it
//-------------------
//-------------------
//-------------------





//commit 8
//Adding DYnamic ingredient components
//---x----x-----x---
//We would add burger needed component and ingredients
//We added the CSS provided to us by Max
//We created Burger-ingredient cascade Style sheet and Burger-ingrident.js
//Now there would be different ingridents which we tend to send from Burger.js from props
//In burger-Ingrident.js file, we create a functional component and import react since we are going to use jsx
//We created a ingrident variable and set it as value to null because we don't want any invalid Value to be passed (more like let ingrident;) -> We won't render anything
//In Switch statement we do props.type -> type is the property we expect to receive -> based on the type we receive will use the case
//-------------------
//-------------------
//-------------------





//commit 9
//Props Valiadtion
//--x--x----x--
//Added Props Validation
//-------------------
//-------------------
//-------------------





//commit 10
//Starting the burger Component
//---x----x---
//In burger.js, we created a functional component which receives some props
//we imported react and BurgerIngredients.js
//We added types under <BurgerIngredients which will passed as props.type to our BurgerIngredients.js
//we created burger.css and added some css and media query
//All the props are static and added manually they look like this   <BurgerIngredients type="bread-top"/> <BurgerIngredients type="meat"/> and wrapped everything with div and added our own styling
//Since we are using switch statement > as we pass props.type > it will forward this to switch and hence display it
//We imported this to container > burger Builder > burger Builder.js
//-------------------
//-------------------
//-------------------





commit 11
//Outputting burger ingredient Dynamically
//----x-----x----
//We will add state, state is an object (in max tutorial) -> max
//We pass this array to burger Ingredients through  <Burger ingredient={this.state.ingrident}/> and convert this object to array using Object.keys
//Then we will use 1st map to find the property of the associated objected for example salad:1 -> we will find the property, which is one here -> this is done through
return [...Array(props.ingredient[igKey])] -> This will return a single empty array in case of 1, two empty array in case of 2 and so on..
will map this return and pass in the value of the string which will get as loop progress, this value is pushed in as form of JSX to form an Array
//SInce we are using one variable here, transformedIngrident, we use JSx to insert our value by doing something like this in return {transformedIngrident}

-----Max code alternate classical simplified version----

////Max code for the above logic
//-----
let transformedIngrident = Object.keys(props.ingredient) //["salad", "bacon", "cheese", "meat"]
transformedIngrident = transformedIngrident.map(igKey => { //igKey will pass string which will be mapped like salad then bacon then cheese and then meat

//This will tell the value corresponding to the give string of object for example in case of Salad it will show 1

//[undefined] -> This is because we have  one salad in Ingridents
//[undefined] -> This is because we have  one bacon
//[undefined, undefined, undefined] This is because we have  3 bacon
//[undefined, undefined] This is because we have two meat
  return [...Array(props.ingredient[igKey])].map((_, i) => {
    console.log(transformedIngrident)
      return <BurgerIngredients type={igKey} key={i} />
  //This will first create an empty array and the map used second time will map each ingrident into it with type and key
  })
})

////My Logic
//------
let transformedIngrident = Object.keys(props.ingredient)
var DisplayIngre = [] //this should be an array
var i;
var j;

for (i=0; i<transformedIngrident.length; i++){
  let keyValue = props.ingredient[transformedIngrident[i]]
  let igKey = transformedIngrident[i]
    for ( j=0; j<keyValue; j++) {
DisplayIngre.push(<BurgerIngredients type={igKey} key={i+j} />);
  }
}
//-------------------
//-------------------
//-------------------





commit 12
//Calculating the ingredient sum dynamically
//--------
//Max code
//If you console.log with max code, after setting everything in state to zero, We get 4 empty array
//Something like this -> (4) [Array(0), Array(0), Array(0), Array(0)], if we change salad to 2 then we would have something like this [Array(2), Array(0), Array(0), Array(0)] and so on
//Array contains 4 objects in case state of salad is 4 [Array(4) -> This will contain object
//The inner array are empty hence checking the length won't do the trick
//Hence we use reduce, In reduce what we did was, we created a function like this

transformedIngrident = transformedIngrident.reduce((curr, next) => {
  console.log("current")
  console.log(curr)
  console.log("next")
  console.log(next)
  console.log("tii")
  console.log(transformedIngrident)
    return [...curr, ...next]
}, []);

  console.log(transformedIngrident)

//Here current would be [Array 4 and everything inside it and next would be Array[0]]
so as it increments, it returns [...curr, ...next] this means everything of Array 4 and everything of next
So whenever it sees an empty array, it won't add and hence we will get length


//My code
//We do check over here only ->   for ( j=0; j<keyValue; j++) {, Hence we don't need to use reduce i.e if there is a keyValue then only it will push in
var DisplayIngre = [] which is an array

Hence we can simply do this (we dont need to use reduce method)

if (DisplayIngre.length === 0) {
DisplayIngre = <p> Kuch Nhi </p>
console.log(DisplayIngre)
}
//-------------------
//-------------------
//-------------------





//commit 13
//Adding Building control Component
//-----------
//Here we created a folder from user can add or remove components
//It consist of reusable buttons for which we created another folder named build-control-r -> build-control-r have buildcontrol.js and buildControl.css
//We added build-controls.js/css in Build-Control folder
//Note Build-Control-r is children of Build-Control
//We applied styling/css in build-control.js -> build.controls.css (and added div inside them)
//-------------------
//-------------------
//-------------------




//commit 14
//Outputting multiple Build Controls
//---------
//In this commit we created an array of object where we added the label and and type.
//Inside parent Build-control, we import child build-controls
//We pass this array to child build-controls using map method
//This looks something like this
//{ controls.map(el =>(<BuildControl key={el.label} label={el.label} />))}
//We use key since it is an array at it would be unique here and label is passed to the child component
//-------------------
//-------------------
//-------------------




//commit 15
//Connecting states to the build-controls
//-------
addIngredientHandler = (type) => {
const oldCount = this.state.ingredient[type] //this shold log the value or the property next to it. for example 1 or 2
const updatedCount = oldCount + 1; //this should add one to whatever the count is
let updatedIngridents = {
  ...this.state.ingredient
};
updatedIngridents[type] = updatedCount;
const ingredientPrice = INGREDIENT_PRICE[type]
const  totalPrice = this.state[totalPrice]
const newPrice = totalPrice + ingredientPrice
this.setState({totalPrice: newPrice, ingredient: updatedIngridents});

//Here we get type when we call it from burger-controls
//const oldCount = this.state.ingredient[type] //this should log the value or the property next to it. for example 1 or 2
//const updatedCount = oldCount + 1; //this should add one to whatever the count is
//We make a copy of updatedIngridents in the next line
//updatedIngridents[type] = updatedCount; //This will update the key value of the object
const ingredientPrice = INGREDIENT_PRICE[type] //
//INGRIDENT PRICE is a global object which contains price of everything
//const  totalPrice = this.state.totalPrice -> will set the total price in our states
//const newPrice = totalPrice + ingredientPrice -> adds the cost of component to the total value
//this.setState({totalPrice: newPrice, ingredient: updatedIngridents}); -> Updates the state

//Then inside burgerBuilder
//we do something like this
<BuildControls
ingridentAdded={this.addIngredientHandler}/>
//to pass our addIngredientHandler

//Inside build-controls.js
//We pass the types which our app needs like this
ingridentAdded={() => props.ingridentAdded(el.type)}
//We get el.type from the const controls we created
//We send this to build-control and pass it as an onClick event
//-------------------
//-------------------
//-------------------


[Add a note about what happens inside burger ingredients -> https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/questions/4401532]

MLR — Teaching Assistant  · a day ago  Answer
Hi Rohit,  The general logic is:
#1)  Click the More (button) inside the BuildControl component > onClick={props.added}
#2)  BuildControls component > added={()=>props.ingredientAdded(ctrl.type)}
#3)  BurgerBuilder component > ingredientAdded={this.addIngredientHandler}
#4)  addIngredientHandler (method) > this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
#5)  The state has been altered.
#6)  <Burger ingredients={this.state.ingredients} />
#7)  Burger component > Object.keys( ... ... The burger ingredients are processed.
//-------------------
//-------------------
//-------------------



//commit 16
//Removing and disabling button
//-------
//We did copied most of our code which we used above and changed const updatedCount = oldCount + 1; to const updatedCount = oldCount - 1; and const newPrice = totalPrice - ingredientPrice
//Now we want to disable the button if we have less than zero or zero keyValue pair
//For that we create a copy of our state.ingredients and call it disabledInfo inside our render method
//Then we use from in loop (for (key in disableinfo)) and then disableInfo[key] = disableInfo[key] <= 0
//Here it the latter disableInfor[key] if is greater than or equal to zero, it will set the value to true else fall
//we pass it like this  disabled={disabledInfo}/>
//In our   build-controls, we add  disabled={props.disabled[el.type]} -> here the key value pair would be either true or false now -> Since we copied this.state.ingrident to disableInfo and then changed the keyValue pair to true or false and then pass this to buildcontrols (this won't change our state)
//We pass it build-control and hence if the key value pair will be true, the button will be disabled
//-------------------
//-------------------
//-------------------


//commit 17
//Adding price
//-------
//We added price in this commit
//Passed it to the burger-controls like form burgerBuilder.js like -> price={this.state.totalPrice.toFixed(2)} (to fix it to decimal places)
//ABove map, we did something like this <p> Your current price is {props.price}</p>
//-------------------
//-------------------
//-------------------


//commit 18
//Adding the order button
//-------
//Custom Method
//We created the order button using the button tag, we added its css
//then we put up if condition where if the price is 4 then it will change disability of button to true and the moment it changes to something other than 4 (since 4 is the base Price)
//it will change the disabled to true or false

Max Method
//Rewatch
//we added new state "purchasable" which is intially false and created a new method purchasableHandle
//we create a constant ppurchasable and check if the keyValue is everywhere zero by doing object keys followed by object map and then reduce method
//Object keys create an array of salad and everything, map will display the keyValue -> reduce will add everything, then we check if the sum is greater than 0 or not -> if greater than zero condtion is false
//We want this method to be executed whenever we add ingredient or remove an ingredient so we call it from those method
//We also pass ingrident as a argument to this handler to make sure we always have latest state
//-------------------
//-------------------
//-------------------


//commit 19
//Creating the order summary
//-------
//We created  folders in component  1. UI, Order Summary. Inside UI we created two folders -> Backdrop and Modal
//Modal creates a simple box in between the orderSummary is shown, we also added Model.CSS
//We imported Modal in BurgerBuilder and since We want order summary to be inside modal, we wrappped it inside Modal tag
//We passed the ingrident prop to ordersummary, used object.keys and then used .map to get ingredient and its summary (orderSummary is wrapped with AUx)
//-------------------
//-------------------
//-------------------


//commit 20
//-------
//Showing  and Hiding Modal
//We added purchasing into state which is intially set to false
//Purchasing is set to true when we click on order button for this we created purchasingHandler()
// we pass this state to modal and whenever this state is true it will make the box true
//Inside Modal we use ternary expression to determine if true and false and change style accordingly
//For example -> <div className={Classes.Modal} style={{display: props.order ? 'block' : 'none'}}>
//If we use purchasableHandler like this purchasable() and then do something like this.setState, it won't be pointing to the state because of the scope of this.. hence we need to use ES6 arrow function
//-------------------
//-------------------
//-------------------


//Commit 22 (21)
//------
//Implementing the Backdrop Component
//We created a backdrop folder having Backdrop.js and backdrop.css
//Backdrop is used to..
//We wrapped Model with Aux and then imported Backdrop.js file making modal as parent
//Order summary passes the prop through which backdrop adds its own styling when purchasable is true
//We also added purchasblecloseHandler which is bassed from BurgerBuilder to modal to Backdrop
//When purchasable state is true, meaning when we click on order now, an order popup summary opens
//The purchasableHandlerClose will close it whenever we click anywhere on the screen by setting it to false
//-------------------
//-------------------
//-------------------


//Commit 23
//-----
//Adding custom button component
//Since we are going to use button multiple times, we created a seperate component in UI (we created a button folder having its js file and CSS)
//We passed the purchasingHandlerClose from BurgerIngredient to ordersummary to Button.js file
//Button.js is child of ordersummary
//In button we want to add multiple styling so we create an array, join and then convert to string
//-------------------
//-------------------
//-------------------


//Commit 24
//-----
//Implementing the button Component
//We created a new handler the purchaseContinueHandler which just alerts something for the time being
//We passed this handler and purchasblecloseHandler the orderSummary which is passed to button.
//In button.js  we have.
//className={[Classes.Button, Classes[props.btnType]].join(' ')} and onClick={props.clicked}>
/Now there are many ways to get the props but one of the way is
   <Button btnType="Danger"  clicked={props.purchasingHandlerClose}>Cancel </Button>
   <Button btnType="Success"  clicked={props.purchaseContinueHandler}> Order</Button>
//In above example if cancel Button would be clicked then btnType Danger would be passed and similarly props associated with clicked
//-------------------
//-------------------
//-------------------


//Commit 25
//----
//Adding Price to order summary
//Passed the price from BurgerBuilder using this.state.total price to order Summary wrapper
//Outputted that price in Order Summary
//-------------------
//-------------------
//-------------------


//Commit 26
//-----
//Adding a toolbar
//We made toolbar folder, added toolbar.js and toolbar.css file
//Passed it to layout component (making layout the parent)
//Added css properties to toolbar
//-------------------
//-------------------
//-------------------


//Commit 27
//-----
//Adding a log image
//In this lecture we created a logo folder having logo.png and logo.css file
//This is also a react component
//we imported react and we imported location of image
//Consider this

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
//We imported our logo in layout.js and in return statement we added our logo by just doing this <Logo />
//-------------------
//-------------------
//-------------------



//Commit 28
//Adding reusable navigation items
//----------
//In this lecture, We created components for our Navbar, We created navigation-items (.js/.css) and nav-items (.js/css). Each of them is given its own styling
//Navigation items holds <ul> and nav items which is its sub-item holds <li>
//nav-items is added with its own css and contains an <a> tag which gets props dynaically through props.link and if class active should be shown or not (this is Boolean value)
  <a href={props.link} className={props.active ? Classes.active : null }>  {props.children} </a>
//We pass this to child component by giving props a link and class.active a boolean value by
<Navitems link="/" active> Burger Builder </Navitems>
//When active is writen is just like this, class.active will be considered as true
//We bass navigationitems.js file to toolbar and used <Navitems /> to output it
//-------------------
//-------------------
//-------------------



//Commit 29
//Creating a responsive Side Drawer
//-------
//We created a sideDrawer.js file and css file
//We imported Logo and NavItems and css
//The sideDrawer css file contains nedia query css which allows it to be displayed only a smaller device and ehnce we added CSS
//we added Logo and <navitems> inside div tag (div -> * logo * (nav -> navitems)
//we imported this to layout (since it is kinds of like a toolbar for mobile so it sits on the same level as our toolbar component and hence we imported it into layout)
//-------------------
//-------------------
//-------------------



//commit 30
//Working on responsive design
//------
//In the previous module our sidedrawer logo looked weird since its was following NavBar height of 80% (it should have taken toolbar height of 80% and 80% of  sidedrawer is weird)
//To overcome this, even though we have defined height in our logo.css, we did inline-styling
//i.e in our logo.js  we added -> style={{height: props.height}}>
<div className={Classes.logo} style={{height: props.height}}>
  <img src={Burgerlogo} alt="MyBurger"/>
</div>
//Inline Style will overwrite the externa css style and then we can pass the respective height from navbar and sidedrawer (where our logo is used)
//We can also wrap this under a div and give div an inline heigh (ex - <div style={{height: 11%}}> <logo /> </div>) -> This should also work
//-------------------
//-------------------
//-------------------


//Commit 31
//More About responsive adjustment in navbar
//-----
//Earlier our desktop navigation was visible even though we were on mobile-toggling
//We changed CSS in our navigation-items.css (this was to change the styling from column to row and so on)
//We add a nav tag which wraps our navigation-items.js in toolbar.js and in toolbar.css (media query to set minimum width)
//-------------------
//-------------------
//-------------------


//Commit 34
//Reusing the backdrop
//-----
//In this lecture we added the backdrop to our sideDrawer (tansparent black background)
//We imported Backdrop to sideDrawer and wrapped sideDrawer with Aux, Backdrop sits below the sideDrawer and since sideDrawer have greater z-index when compared to backdrop, the non siderDrawer parts gets blurred (or gets black transparent background)
//We created layout as stateful component to monitor the state of sideDrawer (open or close) hence now it would class Layout extends component
//We added state of sidedrawer as true and made sideDrawerCloseHandler which change the state to the false
//We passed sideDrawerOpen and sideDrawerCloseHandler to the side drawer where sideDrawerCloseHandler is this.sideDrawerCloseHandler and sideDrawerOpen is the current state (this.state.sidedrawer)
//Inside sideDrawer we intially set the class to close and change it true only when props.sideDrawerOpen is true (we did this inform of an array) i.e
let attachedClasses = [Classes.sidedrawer, Classes.close]
if (props.SideDrawerOpen) {
 attachedClasses = [Classes.sidedrawer, Classes.open]
}
//We added this div (joined these two classes), <div className={attachedClasses.join(' ')}>
//For our backdrop, we passed show as props.SideDrawerOpen and purchasingHandlerClose as {props.sideDrawerCloseHandler}
//-------------------
//-------------------
//-------------------


//commit 35
//Adding sideDrawer toggle button
//----
//---Rohit Method
//In this lecture, we added sideDrawerTogglerHandler which changes the state of the sidetoggler (it looks like this)
sideDrawerTogglerHandler = () => {
  this.setState((prevState) => ({
    sidedrawer: !prevState.sidedrawer
  }));
}
//We passed this to <ToolBar using   <Toolbar sideDrawerTogglerHandler={this.sideDrawerTogglerHandler}/>
//In Toolbar we created a button which is only visible in small screen and clicking the button toggles the class
//  <button onClick={props.sideDrawerTogglerHandler}> Click Me </button> ,we wrapped this with div and added css to make it visible on mobile screen
//-------------------
//-------------------
//-------------------
//--Max Method
//We create a seperate stateless functional component inside sidedrawer named drawtoggler
//drawtoggler contains just a div tag which gets props from toolbar (sideDrawerToggle props)
//We import drawtoggler to toolbar
//Toolbar gets sideDrawerToggle which changes the sidedrawer state to true or false from layout.js (layout passes sideDrawerToggle props which is passed to drawtoggle)
//We added CSS to DrawerToggler
//-------------------
//-------------------
//-------------------


//commit 36
//Adding toggler icon (hamburger icon)
//----
//--Here we commited Max Method
//We added the CSS max give
//Important note about the CSS
//3 toggle line we see at side bar
CSS for this
.DrawerToggler div {
    width: 90%;
    height: 3px;
    background-color: white;
}
JSX
<div className={Classes.DrawerToggler} onClick={props.sideDrawerToggler}>
<div> </div>
<div> </div>
<div> </div>
</div>
//-------------------
//-------------------
//-------------------


//Commit 37
//-------
//Improving Performance
//Here we try to figure things which render all the times but don't need to render when not required
//For example order Summary in modal, We don't need the orderSummary to update at all the time so we convert the modal to stateful or class component
//In shouldComponentUpdate we added condition stating if our previous state is not equal to our current state then only it will render
//WE also converted our orderSummary to stateful component (which wasn't required and can be used as a functional component)
//We didn't used pure component because pure component will do additional unnecessary checks as well
//-------------------
//-------------------
//-------------------



---------------------
xxxxxxxxxxxxxxxxxxxxx
---------------------
xxxxxxxxxxxxxxxxxxxxx
---------------------
xxxxxxxxxxxxxxxxxxxxx


---------------------
//Accessing the server


//Commit 43
//-----
//Sending a post request to firebase
//We created fire base real time test account
//We added axios library using npm install axios --save
//we create axios.js file with our End point given by firebae as default URL

//Note
//In our Firebase or any backend server we should always update the price so user can't manipulate
//Firbase uses monogDb and mangoDB is just json like nested structure
//For example if we don't have order and we send a post request to https://burger-project-8613b.firebaseio.com/order.json it will create order
//For firebase we need to add json i.e order.json

//Inside our purchaseContinueHandler = () => {
//We created an object order which have ingredient, price, customer details, contact detials
//Since we don't have order here we will send a post request and it will create a json object in firebase and return false
//We also applied catch method as well to log error
//-------------------
//-------------------
//-------------------


//commit 44
//-----
//Displaying spinner while sending request
//We created folder spinner having Spinner.js and css in UI and imported it burgerBuilder
//We added a new state loading and set it to false, when this state is true, the spinner appears
//we set the state true as soon as we call purchaseContinueHandler = () => { and change the state true in axios request
  axios.post("/orders.json", order).then(response => {
    this.setState({loading: false})
  })
  .catch(error => {
    this.setState({loading: false})
    console.log(error)
    })
//This will set the state false even if there is error so we don't continue to see the spinner
//We create order object which we passed in this request
//We created a new constant having value of order summary
//We used if condition, if this.state.loading is true then we passed <Spinner />
//If condition is false we return our orignal summary
//Below modal we remove <orderSummary /> and passed the order summary constant which holds the return value of orderSummary <Modal> {orderSummary} </modal>
//Since our orderSummary is below or inside modal and we have shouldComponentUpdate which check if our current order state is not equal to previous state, then only it will render, and since our order.state is not changing it won't show our spinner CSS
//to fix this we do somethng like
shouldComponentUpdate(nextProps, nextState) {
  return  nextProps.order !== this.props.order || nextProps.children !== this.props.children;
}
//-------------------
//-------------------
//-------------------


//commit 46
//-------
//Handling errors
//In this lecture we created ErrorHandler.js which is an HOC
//We imported React,Aux,  axios, modal (modal is the box on which we display things like order summary)
//We created functioncal componenet which returns react class (since we are using second type of HOC, hence we get arguments for which we have to use function)
//The functional component gets the component on which we want our errors to be displayed (burgerBuilder.js)
//We create a state error which is intitally false and if set state is true it displays the error in modal
//Inside componentDidMount we did something like this
componentDidMount () {
  axios.interceptors.request.use(req => {
    this.setState({error:null})
    return req
  });
  axios.interceptors.response.use(res => {
    console.log(res)
    return res
  }, error => {
    console.log(error)
    this.setState({error:error})
     console.log(this.state.error.message)
  });
//Here whenever we are sending post request we change the state to null so that we don't get error message
//Also if we get the error message (as a response) we change the state to error

//We also created
errorConfirmedHandler = () => {
  this.setState({error: null})
}
//This is passed to modal and hence it changes the state of the error make it false and closing the error
//In our return JSX part we did something like this
<Aux>
  <Modal
    order={this.state.error}
    purchasingHandlerClose={this.errorConfirmedHandler}>
      {this.state.error ? this.state.error.message : null}
  </Modal>
<WrappedComponent {...this.props} />
</Aux>
//Aux is hoc
//Modal we pass order i.e if the error is true it will show the modal (this is same for orderSummary i.e if the purchasing is true then only it will show modal)
//    purchasingHandlerClose={this.errorConfirmedHandler}> -> Closes the error box when we click on backdrop
//{this.state.error ? this.state.error.message : null} -> Display the error message when state of the rror is true
//<WrappedComponent {...this.props} /> forwards all the props, check react important instruction to understand more
//-------------------
//-------------------
//-------------------


//commit: 47
//----x---x
//Recieveing Data from Backend
//In our Firebase we add ingredients and its component, we will get the link if we want to fetch data.
//We set the state of the ingredient to null in our BurgerBuilder.js
//We created new state error which is equal to null
//Inside our BurgerBuilder, componentDidMount we do a get request to get Data
//Once we get data we pass it to setState ingredient and if we get an error we catch it and change the setState of error to the error message
//Since we our getting our Data from the backend, we need to display to only when we have it
//We use if condition inside render if this.state.ingredient is true -> We display burger Build controls order Summary else we display spinner (this is stored in {burgerBuilder})
//And if the error is true, we display the error message
//For both of them we use this statement
  let burgerBuilder = (this.state.error ? this.state.error.message : <Spinner />)
//We moved the spinner (post) if statement after the ingredient (get) if statement
//In burger builder return JSX part we added {burgerBuilder constant}
//In Error handler we changed it from componentDidMount to componetDidMount
//-------------------
//-------------------
//-------------------


//Commit 50
//--x---x----x----x--
//Remving old Interceptors
//We added this in component did mount, we are going to use error handler in multiple instance inside our programme, to avoid memory leaks we use this so that dead interceptors should be ejected from the memory
componentWillUnmount() {
          axios.interceptors.request.eject(this.reqInterceptor);
          axios.interceptors.response.eject(this.resInterceptor);
      }
//-------------------
//-------------------
//-------------------
