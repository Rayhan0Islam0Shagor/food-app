import React from 'react';

import classes from './Header.module.css';
import MealImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>REACT MEALS</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={MealImg} alt="A table of full of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
