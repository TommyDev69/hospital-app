import React, { useState } from "react";
import "./navbar.css";
import NavContent from "./NavContent";
import NavTop from "./NavTop";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser ,faInfoCircle, faList} from '@fortawesome/free-solid-svg-icons'


// import { icon } from "@fortawesome/fontawesome-svg-core";

// import React from 'react';
function Navbar() {
  let Title = "LINUX APP";

  const data = [
    { id: 1, Name: "Home", url:'/'},
    { id: 2, Name: "About" },
    { id: 3, Name: "Contact us" },
    { id: 4, Name: "Treatment" },
    { id: 5, Name: "Doctors" },
    // { id: 6, Name: "Blogs" },
    { id: 7, Name: "Login", icon : faUser },
    { id: 8, Name: "Sign up", icon : faInfoCircle},
    // {id:9, Name:'', icon:faTShirt}
  ];

  const [Nav] = useState(data);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const topItems = Nav.filter(item => item.id >= 1 && item.id <= 6);
  const authItems = Nav.filter(item => item.id === 7 || item.id === 8);

  const topList = topItems.map(item => (
    <li className="px-4 py-2" key={item.id}>
      {item.icon && <FontAwesomeIcon icon={item.icon} />}
      {item.Name}
    </li>
   
  ));

  const authList = authItems.map(item => (
    <li className="px-4 py-2 text-[#ccc]" key={item.id}>
      {item.icon && <FontAwesomeIcon icon={item.icon} className="px-4" />}
      {item.Name}
    </li>
  ));

  return (
    <div className="image relative py-8 md:py-20">
     <div className="relative z-20 flex w-full items-center justify-between px-5 md:block md:px-12 lg:px-20">
       <h1 className="text-3xl font-extrabold text-center text-[#0cb7d6] md:text-[50px]">{Title}</h1>
       <NavContent navLink={topList} navLinks={authList} isOpen={isMenuOpen} />
       <button
         type="button"
         className="rounded bg-white p-3 text-2xl text-[#0cb7d6] md:hidden"
         aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
         aria-expanded={isMenuOpen}
         aria-controls="primary-navigation"
         onClick={() => setIsMenuOpen((open) => !open)}
       >
         <FontAwesomeIcon icon={faList} />
       </button>
      </div>
    
      <NavTop />

    </div>
  );
}

export default Navbar;
