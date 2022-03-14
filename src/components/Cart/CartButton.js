import { useSelector, useDispatch } from "react-redux";
import classes from "./CartButton.module.css";

import { uiActions } from "../../store/ui";

const CartButton = (props) => {
  const counter = useSelector((state) => state.counter.counter);
  const showCart = useSelector((state) => state.ui.showCart);

  const dispatch = useDispatch();
  const toggleShowCartFlag = () => {
    dispatch(uiActions.showCart());
  };

  return (
    <button className={classes.button} onClick={toggleShowCartFlag}>
      <span>My Cart</span>
      <span className={classes.badge}>
        {counter}
      </span>
    </button>
  );
};

export default CartButton;
