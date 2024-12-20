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
  const topItems = Nav.filter(item => item.id >= 1 && item.id <= 6);
  const authItems = Nav.filter(item => item.id === 7 || item.id === 8);

  const topList = topItems.map(item => (
    <li className="inline  px-4 md:px-4" key={item.id}>
      {item.icon && <FontAwesomeIcon icon={item.icon} />}
      {item.Name}
    </li>
   
  ));

  const authList = authItems.map(item => (
    <li className="text-[#ccc] " key={item.id}>
      {item.icon && <FontAwesomeIcon icon={item.icon} className="px-4" />}
      {item.Name}
    </li>
  ));

  return (
    <div className="image py-24   ">
     <div className="flex md:block  justify-between items-center w-full md:pl-20 md:px-20 px-10">
       <h1 className="md:text-[50px] text-4xl  font-extrabold text-center text-[#0cb7d6]">{Title}</h1>
       <NavContent navLink = {topList} navLinks={authList}/>
       <FontAwesomeIcon icon={faList} className=" md:hidden bg-white p-4 block text-[24px]" />
      </div>
    
      <NavTop />

    </div>
  );
}

export default Navbar;
