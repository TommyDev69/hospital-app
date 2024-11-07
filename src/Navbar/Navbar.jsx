import React, { useState } from "react";
import "./navbar.css";
import NavContent from "./NavContent";
import NavTop from "./NavTop";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser ,faInfoCircle} from '@fortawesome/free-solid-svg-icons'


// import { icon } from "@fortawesome/fontawesome-svg-core";

// import React from 'react';
function Navbar() {
  let Title = "LINUX APP";

  const data = [
    { id: 1, Name: "Home", url:'/' },
    { id: 2, Name: "About" },
    { id: 3, Name: "Contact us" },
    { id: 4, Name: "Treatment" },
    { id: 5, Name: "Doctors" },
    { id: 6, Name: "Blogs" },
    { id: 7, Name: "Login", icon : faUser },
    { id: 8, Name: "Sign up", icon : faInfoCircle},
    // {id:9, Name:'', icon:faTShirt}
  ];

  const [Nav] = useState(data);
  const topItems = Nav.filter(item => item.id >= 1 && item.id <= 6);
  const authItems = Nav.filter(item => item.id === 7 || item.id === 8);

  const topList = topItems.map(item => (
    <li className="inline   px-6" key={item.id}>
      {item.icon && <FontAwesomeIcon icon={item.icon} className="text-[1rem] mgr-4" />}
      {item.Name}
    </li>
   
  ));

  const authList = authItems.map(item => (
    <li className="text-[20px] px-6  inline text-[#ccc] " key={item.id}>
      {item.icon && <FontAwesomeIcon icon={item.icon} className="texvt-[1rem] px-2 mgr-4" />}
      {item.Name}
    </li>
  ));

  return (
    <div className="image py-24">
      <h1 className="text-4xl font-extrabold text-center text-[#0cb7d6]">{Title}</h1>

      <NavContent navLink = {topList} navLinks={authList}/>
      <NavTop />

    </div>
  );
}

export default Navbar;
