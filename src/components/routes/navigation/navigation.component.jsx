import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import {
  NavBarContainer,
  LogoContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles";
import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

const SimpleJoy = () => {
  return (
    <img
      src="https://i.ibb.co/k9WYH0d/logo.png"
      style={{ width: "180px", margin: "10px 0 0 15px " }}
      alt="SimpleJoy logo"
    />
  );
};

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  // console.log(currentUser, 'usercurrent')
  return (
    <Fragment>
      <NavBarContainer>
        <LogoContainer to="/">
          <SimpleJoy />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavBarContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
