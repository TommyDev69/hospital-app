import React, { useState } from "react";
import ButtonNav from "./ButtonNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons";

const NavTop = () => {


    const [ButonClick, setClick] = useState('Read More');
    
    const HandleReadMore = () => {
            let newClick =  <span> Loading... <FontAwesomeIcon icon={faArrowsSpin} spin />
          </span>;
            setClick(newClick)
       
    }
   

    return ( 
        <div className="text-center ">
            <h1 className="capitalize text-6xl font-bold text-[#ffffff] pb-8 pt-28">
                we care of you
                </h1>
                <p className="text-xl w-1/2 mx-auto text-[#fff]">
                When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                </p>
                <ButtonNav HandleButton = {HandleReadMore}  ClickMe = {ButonClick} />
                </div>
     );
}
 
export default NavTop;