import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'

const  NavLocation = (props) => {
const element = <FontAwesomeIcon icon={faLocation} />

    return ( 
        <div className='flex items-center gap-2 hover:text-black cursor-pointer'>
            <p className=" text-white text-2xl">{element}</p>
            <p className=" text-white text-2xl">{props.Location}</p>
        </div>
    
     );
}
 
export default  NavLocation;