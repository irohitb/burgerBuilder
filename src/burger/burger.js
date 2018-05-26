import React from 'react';
import classes from './burger.css'
import BurgerIngredients from './ingredient/burger-ingredient.js'


const burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top"/>
      <BurgerIngredients type="meat"/>
      <BurgerIngredients type="Cheese"/>
      <BurgerIngredients type="Salad"/>
      <BurgerIngredients type="Bacon"/>

      <BurgerIngredients type="bread-bottom"/>

    </div>
  );
}

export default burger;
