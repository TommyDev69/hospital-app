import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
const NavEmail = (props) => {
const element = <FontAwesomeIcon icon={faEnvelope} />

    return ( 
        <div className='flex items-center gap-2 hover:text-black cursor-pointer text-[16px] '>
        <p className=" text-white ">{element}</p>
        <p className=" text-white ">{props.Mail}</p>
    </div>
     );
}
 
export default NavEmail;