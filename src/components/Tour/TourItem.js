import { useState, useContext } from "react";
import classes from "./TourItem.module.css";
import CartContext from "../../store/cart-context";

const TourItem = (props) => {
  const [readMore, setReadMore] = useState(false);
  const cartCtx = useContext(CartContext);

  const toogleReadMoreHandler = () => {
    setReadMore(!readMore);
  };

  const addToCartHandler = () => {
    cartCtx.addTour(props);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.country}>{props.country}</h1>
      <div className={classes.photo}>
        <img src={props.photo} alt={props.name} />
      </div>
      <h2 className={classes.title}>{props.name}</h2>
      <h1 className={classes.date}>{props.date}</h1>
      <p className={classes.description}>
        {readMore
          ? props.description
          : `${props.description.substring(0, 38)}...`}
        <button className={classes.buttonRead} onClick={toogleReadMoreHandler}>
          {!readMore ? " read more" : " hide"}
        </button>
      </p>
      <div className={classes.actions}>
        <button
          className={classes.button}
          onClick={() => props.onDel(props.id)}
        >
          Delete tour
        </button>
        <button className={classes.button} onClick={addToCartHandler}>
          Buy tour
        </button>
      </div>
    </div>
  );
};

export default TourItem;
