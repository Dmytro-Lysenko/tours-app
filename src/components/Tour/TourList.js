import TourItem from "./TourItem";

const TourList = (props) => {
  return (
    <section>
      {props.tours.map((tour) => (
        <TourItem onDel={props.onDel}
          key={tour.id}
          id={tour.id}
          name={tour.name}
          date={tour.date}
          country={tour.country}
          photo={tour.photo}
          description={tour.description}
        />
      ))}
    </section>
  );
};

export default TourList;
