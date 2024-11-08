
import NavCallNumber from "./NavCallNumber";
import NavEmail from "./NavEmail";
import NavLocation from "./NavLocation";

const TopNav = () => {
    const phone = "call: +2349026274950";
    const Email = "sunnevian4life@gmail.com";
    const Locate = 'ibadan, nigeria';
    
    return ( 
        <div className="bg-[#0cb7d6] py-6 hidden md:flex justify-between items-center px-28 font-bold w-full ">
            <NavCallNumber Call = {phone} />
            <NavEmail Mail = {Email} />
            <NavLocation Location = {Locate} />
           </div>
     );
}
 
export default TopNav;