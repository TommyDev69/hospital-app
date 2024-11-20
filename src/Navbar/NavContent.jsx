const NavContent = ({navLink, navLinks}) => {
    return ( 
        <div className=" hidden min-w-full text-[24px]   md:text-[20px] lg:text-[26px] px-4  md:justify-between items-center md:flex py-24 text-[#ccc]   w-full" >
            <ul className="flex ">
             {navLink}
            </ul>

          <div>

            <ul className="lg flex hirdden pb-10">

             {navLinks}
            </ul>
        </div>
        
            
        </div>
     );
}
 
export default NavContent;