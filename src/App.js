import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Productpage } from "./pages/ProductPage/Productpage";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { CartPage } from "./pages/Cartpage/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage/CheckoutPage";
import { PaymentPage } from "./pages/PaymentPage/PaymentPage";
import { ResetPassword } from "./pages/Auth/ResetPassword/ResetPassword";
import { ForgetPassword } from "./pages/Auth/ForgetPassword/ForgetPassword";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login/" element={<Login />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
        <Route path="/resetpassword" element={<ResetPassword />}></Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<Productpage />} />
        <Route path="/search-page" element={<SearchPage />}></Route>
        <Route path="/cart-page" element={<CartPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/payment" element={<PaymentPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
