import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
const NavCallNumber = (props) => {
    const element = <FontAwesomeIcon icon={faPhone} />

    return ( 
        <div className='flex items-center gap-2 hover:text-black cursor-pointer text-[16px]'>
            <p className=" text-white ">{element}</p>
            <p className=" text-white">{props.Call}</p>
        </div>
     );
}
 
export default NavCallNumber;