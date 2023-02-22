import Home from "./components/routes/home/home.component.jsx";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/routes/navigation/navigation.component.jsx";
import Authentication from "./components/routes/authentication/authentication.component.jsx";
import Shop from "./components/routes/shop/shop.component"
import Checkout from "./components/routes/checkout/checkout.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index = {true} element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
