import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope, faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";

import facebook from "../images/faceBook-Photoroom.png"
import instagram from "../images/instaground.webp"
import twitter from "../images/twitter-Photoroom.png"
import linkedln from '../images/linkedin1-Photoroom.png'


const FirstFooter = () => {
    return ( 
        <div className="pl-2 lg:pl-36  md:pl-10">
        
            <div className="flex items-center py-16">
               <div className="bg-blue-500 w-14 md:w-10 lg:w-16  lg:h-16 md:h-10 h-14 rounded-full"></div>
                <p className="font-bold uppercase text-[28px] text-white pl-4">address</p>
            </div>
            <div className="flex items-center text-white">
               <FontAwesomeIcon icon={faLocation} className='text-[24px]' />
                <p className="font-bold capitalize text-[24px] pl-4">making this the first truth</p>
            </div>

            <div className="flex items-center text-white">
               <FontAwesomeIcon icon={faPhone} className='text-[24px]' />
                <p className="font-bold  text-[24px] pl-4 ">(+234) 902627495</p>
            </div>

            <div className="flex items-center text-white">
               <FontAwesomeIcon icon={faEnvelope} className='text-[24px]' />
                <p className="font-bold upperca text-[24px] pl-4">sunnevian4life@gmail.com</p>
            </div>


            <div className="flex items-center text-white pt-20">
               <img src={facebook} alt="" className='md:w-20 w-16' />
               <img src={instagram} alt="" className='md:w-20 w-16' />
               <img src={twitter} alt="" className='md:w-20 w-16' />
               <img src={linkedln} alt="" className='md:w-20 w-16'/>
            </div>

        </div>
     );
}
 
export default FirstFooter;