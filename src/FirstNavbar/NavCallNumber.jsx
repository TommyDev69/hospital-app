import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
const NavCallNumber = (props) => {
    const element = <FontAwesomeIcon icon={faPhone} />

    return ( 
        <div className='flex items-center gap-2 hover:text-black cursor-pointer'>
            <p className=" text-white text-2xl ">{element}</p>
            <p className=" text-white text-2xl">{props.Call}</p>
        </div>
     );
}
 
export default NavCallNumber;