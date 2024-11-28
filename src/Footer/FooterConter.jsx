import React from "react";

const FooterConter = ({handleValue, clickMe, handleChange, title}) => {
    return ( 
        <form >
            <div className="py-32">

            <input type="email" className="pr-6 text-xl md:text-2xl border-b-2 focus:bg-black text-white  border-b-white w-[50%] pt-16 pb-4 md:ml-[16%] ml-[10%] bg-black   focus:border-b-2 focus:border-b-white focus:outline-none" name='email' value={handleValue.email} onChange={handleChange} placeholder="Enter a value Email" />
            <button type="submfdddit" className="border-b-2 border-b-white pt-16 pb-4 md:text-3xl text-2xl text-white focus:border-b-2 focus:border-b-white" onClick={clickMe}>{title}</button>
            </div>

        </form>
     );
}
 
export default FooterConter;