import Home from "./components/routes/home/home.component.jsx";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/routes/navigation/navigation.component.jsx";
import SignIn from "./components/routes/sign-in/sign-in.component.jsx";


const Shop = () => {
  return <h1>I am the shop!</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index = {true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
