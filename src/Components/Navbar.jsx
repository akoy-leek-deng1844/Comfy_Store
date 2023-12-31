import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/user/userSlice";
const themes = {
  winter: "winter",
  dark:"dark"
}

const Navbar = () => {
  const dispatch = useDispatch();
  const handleTheme = () => {
   dispatch(toggleTheme())
  }
 
  const numItemsInCart = useSelector((state)=>state.cartState.numItemsInCart)
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        {/* {DROPDOWN MENU & LOGO} */}
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden btn btn-ghost ">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 w-52 bg-base-200 rounded-box z-index-[1]"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center menu menu-horizontal hidden lg:flex">
          {" "}
          <NavLinks />
        </div>
        <div className="navbar-end">
          {/* {THEME ICONS} */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="swap-on w-4 h-4" />
            <BsMoonFill className="swap-off w-4 h-4" />
          </label>
          {/* {CART LINK} */}
          <NavLink to="cart" className="btn btn-md btn-ghost btn-circle ml-4">
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className="indicator-item badge badge-sm badge-primary">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
