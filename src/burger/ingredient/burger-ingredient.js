import React from 'react';
import classes from './Burger-Ingredient.css'
import PropTypes from 'prop-types';

const BurgerIngredients = (props) => {
  let ingredient = null;

  switch (props.type) {
    case ('bread-bottom');
      ingredient = <div className={classes.BreadBotton};</div>
      console.log(typeof ingredient);
    break;
    case ('bread-top');
      ingrident = (
        <div className = {classes.BreadTop}>
          <div className = {classes.Seeds1}></div>
          <div className = {classes.Seeds2}></div>
        </div>
        );
        console.log(typeof ingrident)
    break;
    case ('meat');
      ingrident = <div className = {classes.Meat}> </div>
    break;
    case ('Cheese');
      ingrident = <div className = {classes.Cheese}> </div>
    break;
    case ('Salad');
      ingrident = <div className = {classes.Salad}> </div>
    break;
    case ('Bacon');
      ingrident = <div className = {classes.Bacon}> </div>
    break;
    default:
      ingrident = null;
    }

    return ingredient;
};

BurgerIngredients.propTypes = {
  ingredient: PropTypes.string.isRequired
}

export default BurgerIngredients;
