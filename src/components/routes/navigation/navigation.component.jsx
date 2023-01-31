import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss"


const SimpleJoy = () => {
    return (
        <img src="https://i.ibb.co/k9WYH0d/logo.png" style={{width: "180px", margin: "10px 0 0 15px "}} alt = "SimpleJoy logo"/>
    )
}

const NavBar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <Link className="logo-container" to="/">
        <SimpleJoy/>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
