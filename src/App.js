import { Route, Routes } from "react-router";
import AddNewTour from "./components/pages/AddNewTour";
import AllTours from "./components/pages/AllTours";
import Header from "./components/UI/Header";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<AllTours />} exact></Route>
        <Route path="/add-new-tour" element={<AddNewTour />}></Route>
      </Routes>
    </main>
  );
}

export default App;
