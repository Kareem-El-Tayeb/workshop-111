// import React, { useEffect, useState } from "react";
// import "./nav.css";
// import { NavLink } from "react-router-dom";
// import { IoHome } from "react-icons/io5";
// import { FcAbout } from "react-icons/fc";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaProductHunt } from "react-icons/fa6";
// import { IoCart } from "react-icons/io5";
// const Navbar = () => {
//   const [klam, setKlam] = useState(false);
//   const [wScroll, setWScroll] = useState(false);
//   useEffect(() => {
//     window.addEventListener("resize", () => {
//       let windowSize = window.innerWidth;
//       windowSize >= 650 ? setKlam(true) : setKlam(false);
//     });
//     window.addEventListener("scroll", () => {
//       let windowScroll = window.scrollY;
//       windowScroll >= 700 ? setWScroll(true) : setWScroll(false);
//     });
//   });
//   return (
//     <header
//       style={
//         wScroll
//           ? { padding: "50px", background: "#fff", color: "#000" }
//           : undefined
//       }
//     >
//       <nav>
//         <span style={wScroll ? { color: "#000" } : undefined}>LOGO</span>
//         <ul>
//           <li>
//             <NavLink
//               style={wScroll ? { color: "#000" } : undefined}
//               className={window.location.pathname === "/" && "active"}
//               to={"/home"}
//             >
//               <IoHome size={15} />
//               {klam ? "Home" : undefined}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               style={wScroll ? { color: "#000" } : undefined}
//               to={"/about"}
//             >
//               {" "}
//               <FcAbout size={15} />
//               {klam ? "About" : undefined}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               style={wScroll ? { color: "#000" } : undefined}
//               to={"/contact"}
//             >
//               <FaPhoneAlt size={15} />
//               {klam ? "Contact" : undefined}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               style={wScroll ? { color: "#000" } : undefined}
//               to={"/products"}
//             >
//               <FaProductHunt size={15} />
//               {klam ? "Products" : undefined}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               style={wScroll ? { color: "#000" } : undefined}
//               to={"/cart"}
//             >
//               <IoCart size={15} />
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaProductHunt } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoCart, IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import "./nav.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [bigMenu, setBigMenu] = useState(false);
  const [close, setClose] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      let windowSize = window.innerWidth;
      windowSize <= 700 ? setMenu(true) : setMenu(false);
    });
  });
  const changeMenu = () => {
    setBigMenu(!bigMenu);
    setClose(!close);
  };
  const userName = useSelector(x => x.userName)
  const cartProducts = useSelector((x) => x.cart);
  return (
    <header>
      <nav>
        <span>LOGO</span>
        <ul
          className={bigMenu ? "bigMenu" : undefined}
          style={menu ? { display: "none" } : { display: "flex" }}
        >
          <li>
            <NavLink
              className={window.location.pathname === "/" && "active"}
              to={"/home"}
            >
              <IoHome size={15} />
              Home
            </NavLink>
          </li>
          {/* <li>
                <NavLink to={"/about"}>
                  {" "}
                  <FcAbout size={15} />
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>
                  <FaPhoneAlt size={15} />
                  Contact
                </NavLink>
              </li> */}
          {useSelector((x) => x.user) ? (
            <>
              <li>
                <NavLink to={"/profile"}>
                  {" "}
                  <FcAbout size={15} />
                  {userName}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/logout"}>
                  <FaPhoneAlt size={15} />
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/login"}>
                  {" "}
                  <FcAbout size={15} />
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to={"/register"}>
                  <FaPhoneAlt size={15} />
                  Register
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to={"/products"}>
              <FaProductHunt size={15} />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>
              <IoCart size={20} />
              {cartProducts.length}
            </NavLink>
          </li>
        </ul>
        {menu ? (
          close ? (
            <IoIosCloseCircle
              onClick={() => changeMenu()}
              size={25}
              cursor={"pointer"}
            />
          ) : (
            <IoMenu onClick={() => changeMenu()} size={25} cursor={"pointer"} />
          )
        ) : bigMenu ? (
          <IoIosCloseCircle
            onClick={() => changeMenu()}
            size={25}
            cursor={"pointer"}
          />
        ) : undefined}
      </nav>
    </header>
  );
};

export default Navbar;
