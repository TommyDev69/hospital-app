import React from "react";

const FooterConter = ({handleValue, clickMe, handleChange, title}) => {
    return ( 
        <form >
            <div className="py-32">

            <input type="email" className="pl-6 text-3xl border-b-2 focus:bg-black text-white  border-b-white w-[50%] pt-16 pb-4 ml-[18%] bg-black   focus:border-b-2 focus:border-b-white focus:outline-none" name='email' value={handleValue.email} onChange={handleChange} placeholder="Enter a value Email" />
            <button type="submfdddit" className="border-b-2 border-b-white pt-16 pb-4 text-3xl text-white focus:border-b-2 focus:border-b-white" onClick={clickMe}>{title}</button>
            </div>

        </form>
     );
}
 
export default FooterConter;