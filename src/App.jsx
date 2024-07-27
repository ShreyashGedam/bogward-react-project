import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
