// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import { AiFillBank, AiOutlineMenu } from "react-icons/ai";
// import img1 from "../images/Logo.png";
// import img2 from "../images/profile.png";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       <nav class="navbar-light bg-white py-2">
//         <div class="container-fluid container d-flex justify-content-between align-items-center">
//           <Link to={"/"} class="navbar-brand logoNormal">
//             <img src={img1} alt="" />
//           </Link>
//           <ul class="navUl mb-2 me-4 mb-lg-0">
//             <li class="nav-item">
//               <Link to={"/"} class="nav-link" aria-current="page" href="#">
//                 Home
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link to={"/aboutus"} class="nav-link" href="#">
//                 About Us
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link to={"/contactus"} class="nav-link" href="#">
//                 Contact Us
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link to={"/login"} class="nav-link" href="#">
//                 My Account
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link to={"/login"} class="nav-link" href="#">
//                 DSA Login
//               </Link>
//             </li>
//             <Link
//               to={"/login"}
//               class="d-flex align-items-center gap-2 pe-4 py-2 bg-orange btn text-light"
//             >
//               <div
//                 className="rounded-pill d-flex align-items-center justify-content-center"
//                 style={{
//                   backgroundColor: "#F18F78",
//                   width: "1.4rem",
//                   height: "1.4rem",
//                 }}
//               >
//                 <img src={img2} alt="" />
//               </div>
//               <span class="" type="submit">
//                 Log in
//               </span>
//             </Link>
//           </ul>
//           <button
//             className="menu-toggle navMenu btn p-0 shadow-none border-0"
//             onClick={toggleMenu}
//           >
//             {menuOpen ? (
//               <AiOutlineMenu size={22} />
//             ) : (
//               <AiOutlineMenu size={22} />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* ............responsive ...............*/}
//       <nav
//         className={`navbar position-absolute toggleNavbar ${
//           menuOpen ? "open" : ""
//         }`}
//       >
//         <div className=" d-flex flex-column justify-content-center gap-4 me-3">
//           <a
//             className="navbar-brand d-flex justify-content-center mt-3"
//             href="##"
//           >
//             <img src={img1} width={150} alt="" />
//           </a>
//           <ul className="d-flex flex-column justify-content-between gap-4">
//             <Link
//               to={"/login"}
//               className="d-flex align-items-center gap-2 pe-4 py-2 bg-orange btn text-light"
//             >
//               <div
//                 className="rounded-pill d-flex align-items-center justify-content-center"
//                 style={{
//                   backgroundColor: "#F18F78",
//                   width: "1.4rem",
//                   height: "1.4rem",
//                 }}
//               >
//                 <img src={img2} alt="" />
//               </div>
//               <span className="" type="submit">
//                 Log in
//               </span>
//             </Link>
//             <li className="nav-item">
//               <Link to={"/"} className="nav-link" aria-current="page" href="#">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={"/aboutus"} className="nav-link" href="#">
//                 About Us
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={"/contactus"} className="nav-link" href="#">
//                 Contact Us
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={"/login"} className="nav-link" href="#">
//                 My Account
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={"/login"} className="nav-link" href="#">
//                 DSA Login
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import img1 from "../images/Logo.png";
import img2 from "../images/profile.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav class="navbar-light bg-white py-2">
        <div class="container-fluid container d-flex justify-content-between align-items-center">
          <Link to={"/"} class="navbar-brand logoNormal">
            <img src={img1} alt="" />
          </Link>
          <ul class="navUl mb-2 me-4 mb-lg-0">
            <li class="nav-item">
              <Link to={"/"} class="nav-link" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/aboutus"} class="nav-link" href="#">
                About Us
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/contactus"} class="nav-link" href="#">
                Contact Us
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/myaccount"} class="nav-link" href="#">
                My Account
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/login"} class="nav-link" href="#">
                DSA Login
              </Link>
            </li>
            <Link
              to={"/login"}
              class="d-flex align-items-center gap-2 pe-4 py-2 bg-orange btn text-light"
            >
              <div
                className="rounded-pill d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#F18F78",
                  width: "1.4rem",
                  height: "1.4rem",
                }}
              >
                <img src={img2} alt="" />
              </div>
              <span class="" type="submit">
                Log in
              </span>
            </Link>
          </ul>
          <button
            className="menu-toggle navMenu btn p-0 shadow-none border-0"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <AiOutlineMenu size={22} />
            ) : (
              <AiOutlineMenu size={22} />
            )}
          </button>
        </div>
      </nav>

      {/* ............responsive ...............*/}
      <nav
        className={`navbar position-absolute toggleNavbar ${
          menuOpen ? "open" : ""
        }`}
      >
        {" "}
        <div className="d-flex justify-content-end me-3 mt-3"></div>
        <div className=" d-flex flex-column justify-content-center gap-4 me-3">
          <a
            className="navbar-brand d-flex justify-content-between align-items-center "
            href="##"
          >
            <img src={img1} width={150} className="ms-4" alt="" />
            <button
              className="close-menu btn p-0 shadow-none border-0"
              onClick={toggleMenu}
            >
              <RxCross2 size={25} />
            </button>
          </a>
          <ul className="d-flex flex-column justify-content-between gap-4">
            <Link
              to={"/login"}
              className="d-flex align-items-center gap-2 pe-4 py-2 bg-orange btn text-light"
            >
              <div
                className="rounded-pill d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#F18F78",
                  width: "1.4rem",
                  height: "1.4rem",
                }}
              >
                <img src={img2} alt="" />
              </div>
              <span className="" type="submit">
                Log in
              </span>
            </Link>
            <li className="nav-item">
              <Link to={"/"} className="nav-link" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/aboutus"} className="nav-link" href="#">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/contactus"} className="nav-link" href="#">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link" href="#">
                My Account
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link" href="#">
                DSA Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={` ${menuOpen ? "overlay" : ""}`}></div>
    </>
  );
};

export default Navbar;
