import CartItem from "./CartItem";

const CartList = (props) => {
  

  return (
    <div>
      {props.tours.map((tour) => (
        <CartItem
          key={tour.id}
          id={tour.id}
          name={tour.name}
          date={tour.date}
          country={tour.country}
          photo={tour.photo}
          description={tour.description}
        />
      ))}
    </div>
  );
};
export default CartList;
