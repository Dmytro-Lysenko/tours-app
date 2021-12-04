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
    <div style={{ background: 'lightblue', height: '100vh' }}>
      <h1 style={{ textAlign: "center", padding: "2rem" }}>Add New Tour</h1>
      <AddNewTourForm onSubmit={addNewTourHandler} />
    </div>
  );
};

export default AddNewTour;
