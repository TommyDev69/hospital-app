import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
const NavEmail = (props) => {
const element = <FontAwesomeIcon icon={faEnvelope} />

    return ( 
        <div className='flex items-center gap-4 hover:text-black cursor-pointer'>
        <p className=" text-white text-2xl">{element}</p>
        <p className=" text-white text-2xl">{props.Mail}</p>
    </div>
     );
}
 
export default NavEmail;