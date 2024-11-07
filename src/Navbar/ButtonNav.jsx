const ButtonNav = ({HandleButton, ClickMe}) => {

    return ( 
<div className="py-4 pt-20 ">
    <button type="button" onClick={(HandleButton)} className="bg-[#0cb7d6] py-4 px-16 rounded-2xl text-2xl upper text-white  hover:bg-white hover:text-black">{ClickMe}</button>
    </div>
     );
}
 
export default ButtonNav;