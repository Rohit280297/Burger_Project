import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
const burger = (props) =>{

    let trans_ingredients = Object.keys(props.ingredients).map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,index)=>{
            return <BurgerIngredient key={igKey +index} type={igKey}/>;
        });
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);

    if(trans_ingredients.length=== 0){
        trans_ingredients = <p>Please Start adding ingredients.</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {trans_ingredients}
            <BurgerIngredient type="bread-bottom"/>
            
        </div>
    )

}

export default burger;