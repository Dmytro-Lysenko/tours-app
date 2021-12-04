import { useRef } from "react";

const AddNewTourForm = (props) => {
  const nameInputRef = useRef();
  const countryInputRef = useRef();
  const dateInputRef = useRef();
  const photoInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredCountry = dateInputRef.current.value;
    const enteredDate = countryInputRef.current.value;
    const enteredPhoto = photoInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

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
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div>
        <label htmlFor="contry">Country</label>
        <input type="text" id="country" ref={countryInputRef} />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" ref={dateInputRef} />
      </div>
      <div>
        <label htmlFor="photo">Photo:</label>
        <input type="url" id="photo" ref={photoInputRef} />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          id="description"
          required
          rows="3"
          ref={descriptionInputRef}
        ></textarea>
      </div>
      <div>
        <button>Add tour</button>
      </div>
    </form>
  );
};

export default AddNewTourForm;
