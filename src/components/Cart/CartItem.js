import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../../store/cart';

import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const itemPrice = useSelector((state) => state.counter.price);

  const addItemCount = () => {
    dispatch(counterActions.increment());
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${itemPrice}{' '}
          <span className={classes.itemprice}>(${itemPrice.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{counter}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={addItemCount}>-</button>
          <button onClick={addItemCount}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
