import { useState } from "react";
import classes from "./TourItem.module.css";

const TourItem = (props) => {
  const [readMore, setReadMore] = useState(false);

  const toogleReadMoreHandler = () => {
    setReadMore(!readMore);
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
      <button className={classes.button} onClick={() => props.onDel(props.id)}>Delete tour</button>
    </div>
  );
};

export default TourItem;
