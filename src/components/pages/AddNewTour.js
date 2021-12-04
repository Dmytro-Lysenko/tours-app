import { useNavigate } from "react-router";
import AddNewTourForm from "../Tour/AddNewTourForm";

const AddNewTour = () => {
  let navigate = useNavigate();

  const addNewTourHandler = (newTourData) => {
    fetch(
      "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/tours.json",
      {
        method: "POST",
        body: JSON.stringify(newTourData),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div>
      <h1>Add NEw TOur</h1>
      <AddNewTourForm onSubmit={addNewTourHandler} />
    </div>
  );
};

export default AddNewTour;
