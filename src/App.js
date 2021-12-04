import { Route, Routes } from "react-router";

import AddNewTour from "./components/pages/AddNewTour";
import AllTours from "./components/pages/AllTours";
import Cart from "./components/pages/Cart";
import Header from "./components/UI/Header";
import { CartContextProvider } from "./store/cart-context";

function App() {
  return (
    <main>
      <CartContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<AllTours />} exact></Route>
          <Route path="/add-new-tour" element={<AddNewTour />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </CartContextProvider>
    </main>
  );
}

export default App;
