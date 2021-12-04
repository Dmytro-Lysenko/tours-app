import { useRef } from "react";
import classes from './AddNewTourForm.module.css'

const AddNewTourForm = (props) => {
  const nameInputRef = useRef();
  const countryInputRef = useRef();
  const dateInputRef = useRef();
  const photoInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredPhoto = photoInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    // "https://cdn.turkishairlines.com/m/536e8df8c381e006/original/Travel-Guide-of-Paris-via-Turkish-Airlines.jpg"
    // "https://www.poland.travel/images/ru-RU/Miasta/krakow_rynek_2_1170.jpg"

    const newTourData = {
      name: enteredName,
      country: enteredCountry,
      date: enteredDate,
      photo: enteredPhoto,
      description: enteredDescription,
    };

    props.onSubmit(newTourData)
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="contry">Country</label>
        <input type="text" id="country" ref={countryInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" ref={dateInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="photo">Photo:</label>
        <input type="url" id="photo" ref={photoInputRef} />
      </div>
      <div className={classes.control}>
        <label>Description:</label>
        <textarea
          id="description"
          required
          rows="3"
          ref={descriptionInputRef}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add tour</button>
      </div>
    </form>
  );
};

export default AddNewTourForm;
