import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../store/cart";

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const items = [
    { title: "item1", price: 1, description: "desc1" },
    { title: "item2", price: 2, description: "desc2" },
    { title: "item3", price: 3, description: "desc3" },
  ];

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const itemPrice = useSelector((state) => state.counter.price);

  const incrementHandler = (price) => {
    dispatch(counterActions.increment(price));
  };

  return (
    <>
      {items.map((item) => (
        <li className={classes.item}>
          <Card>
            <header>
              <h3>{item.title}</h3>
              <div className={classes.price}>${item.price.toFixed(2)}</div>
            </header>
            <p>{item.description}</p>
            <div className={classes.actions}>
              <button onClick={() => incrementHandler(item.price)}>
                Add to Cart
              </button>
            </div>
          </Card>
        </li>
      ))}
    </>
  );
};

export default ProductItem;
