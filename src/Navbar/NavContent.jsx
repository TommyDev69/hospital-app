const NavContent = ({navLink, navLinks}) => {
    return ( 
        <div className=" min-w-screen hidden bg-fuchsia-8b00 md:flex md:items-center md:justify-around text-[24px] md:text-[18px]  lg:text-[26px] text-[#ccc] py-36" >
            <ul className="ml-[-2 0px]">
             {navLink}
             {/* {navLinks} */}

            </ul>

          <div className="">

            <ul className="  flex items-center">

             {navLinks}
            </ul>
        </div>
        
            
        </div>
     );
}
 
export default NavContent;