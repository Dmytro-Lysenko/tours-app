import { createContext, useState } from "react";

const CartContext = createContext({
  toursInCart: [],
  totalToursInCart: 0,
  deleteTour: (tourId) => {},
  addTour: (tour) => {},
});

export const CartContextProvider = (props) => {
  const [cartTours, setCartTours] = useState([]);

  const addMemHandler = (cartTours) => {
    setCartTours((prevTours) => {
      return prevTours.concat(cartTours);
    });
  };

  const deleteHandler = (tourid) => {
    setCartTours((prevTours) => {
      return prevTours.filter((tour) => tour.id !== tourid);
    });
  };

  const context = {
    toursInCart: cartTours,
    totalToursInCart: cartTours.length,
    deleteTour: deleteHandler,
    addTour: addMemHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
