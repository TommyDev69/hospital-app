const NavContent = ({navLink, navLinks}) => {
    return ( 
        <div className=" min-w-full  text-[24px] px-24 justify-between flex py-24 text-[#ccc]   " >
            <ul className="">
             {navLink}
            </ul>

        <div className="mr-40 w-[2g0%]">

            <ul className="">

             {navLinks}
            </ul>
        </div>
            
            
        </div>
     );
}
 
export default NavContent;