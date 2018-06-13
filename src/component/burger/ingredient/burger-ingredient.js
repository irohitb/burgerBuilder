import React from 'react';
import classes from './Burger-Ingredient.css'
import PropTypes from 'prop-types';

const BurgerIngredients = (props) => {
  let ingredient = null;

  switch (props.type) {
    case ('bread-bottom'):
      ingredient = <div className={classes.BreadBottom}></div>
      console.log(typeof ingredient);
    break;
    case ('bread-top'):
    ingredient = (
        <div className = {classes.BreadTop}>
          <div className = {classes.Seeds1}></div>
          <div className = {classes.Seeds2}></div>
        </div>
        );
        console.log(typeof ingrident)
    break;
    case ('meat'):
    ingredient = <div className = {classes.Meat}> </div>
    break;
    case ('cheese'):
    ingredient = <div className = {classes.Cheese}> </div>
    break;
    case ('salad'):
    ingredient = <div className = {classes.Salad}> </div>
    break;
    case ('bacon'):
    ingredient = <div className = {classes.Bacon}> </div>
    break;
    default:
    ingredient = null;
    }

    return ingredient;
};

//BurgerIngredients.propTypes = {
//  ingredient: PropTypes.string.isRequired
//}

export default BurgerIngredients;
