import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'

const  NavLocation = (props) => {
const element = <FontAwesomeIcon icon={faLocation} />

    return ( 
        <div className='flex items-center gap-2 hover:text-black cursor-pointer text-[16px]'>
            <p className=" text-white">{element}</p>
            <p className=" text-white">{props.Location}</p>
        </div>
    
     );
}
 
export default  NavLocation;