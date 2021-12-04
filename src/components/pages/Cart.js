import CartList from "../Tour/CartList";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const DUMMY_DATA = [
  {
    country: "Poland",
    date: "2021-12-21",
    description:
      "This city is very old and heve alot of nice building from 15s sentury. you ll be glad too visit",
    id: "-Mq3oa42bSVN9pd8wWBz",
    name: "The great Krakov",
    photo:
      "https://www.poland.travel/images/ru-RU/Miasta/krakow_rynek_2_1170.jpg",
  },
  {
    country: "France",
    date: "2021-12-23",
    description:
      "The Paris is very buautiful city that have a old history, and romantic parts this is good to visit",
    id: "-Mq3opzmbERkC6jpeGuJ",
    name: "Sweet Paris",
    photo:
      "https://cdn.turkishairlines.com/m/536e8df8c381e006/original/Travel-Guide-of-Paris-via-Turkish-Airlines.jpg",
  },
];

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  console.log("log from CART", cartCtx.toursInCart);

  return (
    <div>
      <h1 style={{ fontSize: "2rem", textAlign: "center", padding: "2rem" }}>
        Buyed tours
      </h1>
      <CartList tours={cartCtx.toursInCart} />
    </div>
  );
};

export default Cart;
