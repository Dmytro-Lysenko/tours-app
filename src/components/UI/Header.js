import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

import classes from "./Header.module.css";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const [isHighLighted, setIsHighlighted] = useState(false);

  const iconClasses = `${classes.button} ${isHighLighted ? classes.bump : ""}`;

  const { toursInCart } = cartCtx;
 

  useEffect(() => {
    if (toursInCart.length === 0) {
      return;
    }
    setIsHighlighted(true);

    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [toursInCart]);

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">All tours</Link>
          </li>
          <li>
            <Link to="/add-new-tour">Add New Tour</Link>
          </li>
          <li className={iconClasses}>
            <Link to="/cart">
              Cart <span> {cartCtx.totalToursInCart}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
