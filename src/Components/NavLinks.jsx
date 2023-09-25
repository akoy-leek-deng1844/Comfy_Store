import { nanoid } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
  {
    id: nanoid(),
    text: "home",
    url: "/",
  },
  {
    id: nanoid(),
    text: "about",
    url: "about",
  },
  {
    id: nanoid(),
    text: "products",
    url: "products",
  },
  {
    id: nanoid(),
    text: "cart",
    url: "cart",
  },
  {
    id: nanoid(),
    text: "orders",
    url: "orders",
  },
  {
    id: nanoid(),
    text: "checkout",
    url: "checkout",
  },
];
const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);
  return (
      <>
          {links.map((link) => {
            const { url, text, id } = link;
            if ((url === 'checkout' || url === 'orders') && !user) return null;
              return (
                <li key={id}>
                  <NavLink className="capitalize tracking-wider my-2 lg:mx-2 lg:my-0" to={url}>
                    {text}
                  </NavLink>
                </li>
              );
         }) }
      </>
  )
}
export default NavLinks