const NavContent = ({navLink, navLinks}) => {
    return ( 
        <div className=" min-w-screen hidden md:flex md:items-center md:justify-between lg:pl-14 md:pl-0 pl-2 lg:text-[30px] md:text-[20px] text-[10px] text-[#ccc] py-36" >
            <ul className="">
             {navLink}
             {/* {navLinks} */}

            </ul>

          <div className="ml-[-20px] bg-black">

            {/* <ul className="  flex items-center  "> */}

             {navLinks}
            </ul>
        </div>
        
            
        </div>
     );
}
 
export default NavContent;