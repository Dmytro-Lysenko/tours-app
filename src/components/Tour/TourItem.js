import { useState } from "react";
import classes from "./TourItem.module.css";

const TourItem = (props) => {
  const [readMore, setReadMore] = useState(false);

  const toogleReadMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className={classes.container}>
      <h2>{props.name}</h2>
      <h1>{props.country}</h1>
      <h1>{props.date}</h1>
      <div className={classes.photo}>
        <img src={props.photo} alt={props.name} />
      </div>
      <p>
        {readMore
          ? props.description
          : `${props.description.substring(0, 20)}...`}
        <button onClick={toogleReadMoreHandler}>
          {!readMore ? "read more" : "hide"}
        </button>
      </p>
      <button onClick={() => props.onDel(props.id)}>Delete tour</button>
    </div>
  );
};

export default TourItem;
