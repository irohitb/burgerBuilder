import React from 'react';
import classes from './burger.css'
import BurgerIngredients from './ingredient/burger-ingredient.js'


const burger = (props) => {

/*
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
transformedIngrident =  transformedIngrident.reduce((cur, next) => {
    console.log(DisplayIngre)
    return cur.concat(next)
  },[]);
*/



let transformedIngrident = Object.keys(props.ingredient) //["salad", "bacon", "cheese", "meat"]
//Transform Ingredient will always have length of 4 here->["salad", "bacon", "cheese", "meat"]

var DisplayIngre = [] //this should be an array
var i;
var j;


for (i=0; i<transformedIngrident.length; i++){
  let keyValue = props.ingredient[transformedIngrident[i]]
  let igKey = transformedIngrident[i]
    for ( j=0; j<keyValue; j++) {
DisplayIngre.push(<BurgerIngredients type={igKey} key={igKey+i+j} />);
  }
}


if (DisplayIngre.length === 0) {
DisplayIngre = <p> Kuch Nhi </p>
console.log(DisplayIngre)
}


  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top"/>
      {DisplayIngre}
      <BurgerIngredients type="bread-bottom"/>

    </div>
  );
}

export default burger;
