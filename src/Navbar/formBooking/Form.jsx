import { useState } from 'react';

import { faPhone, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

<FontAwesomeIcon icon="fa-solid fa-user" />
const Form = () => {
    const [title, setTitle] = useState({
        name:"",
        phone : ''
        
    });

    const handForm =(e) =>{
        const {name,  value, phone} = e.target;
        
        setTitle({
            [name]: value,
           [phone]: value
        })


    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('====================================');
        console.log('thank you');
        console.log('====================================');
    }
    return ( 
        
       <form onSubmit={handleSubmit}>
        <div>
         <div className="grid md:grid-cols-2 py-6 space-x-4 px-6">
            <div className="relative bg- black  pb-6 ">
                <div className="absolute left-10 text-2xl py-4">
                 < FontAwesomeIcon icon={faUser}  />
                </div>
                <input type="text" name ='name' value={title.name} onChange={handForm}  className=' w-full text-2xl py-4 rounded-md pl-20 border-2 border-[#0cb7d6] focus:bg-gray-400 ' />
            </div>

            <div className="relative bg -red-800">
                <div className="absolute left-10 text-2xl py-4">
                 < FontAwesomeIcon icon={faPhone}  />
                </div>
                <select name=""   className=' w-full text-2xl py-4 rounded-md pl-20 border-2 border-[#0cb7d6] focus:bg-gray-400 '></select>
            </div>
         </div>


        <div className="grid md:grid-cols-2 py-6 space-x-4 px-6">
            <div className="relative bg- black  pb-6 ">
                <div className="absolute left-10 text-2xl py-4">
                 < FontAwesomeIcon icon={faUser}  />
                </div>
                <input type="text" value={title.phone} onChange={handForm} className=' w-full text-2xl py-4 rounded-md pl-20 border-2 border-[#0cb7d6] focus:bg-gray-400 ' />
            </div>

            <div className="relative bg -red-800">
                <div className="absolute left-10 text-2xl py-4">
                 < FontAwesomeIcon icon={faCalendar}  />
                </div>
                <input type="date"  className=' w-full text-2xl py-4 rounded-md pl-20 border-2 border-[#0cb7d6] focus:bg-gray-400 ' />
            </div>
        </div>


       <div className="grid md:grid-cols-2 py-6 space-x-4 px-6">
            <div className="relative bg- black  pb-6 ">
                <div className="absolute left-10 text-2xl py-4">
                 < FontAwesomeIcon icon={faUser}  />
                </div>
                <input type="text" className='w - [65%] w-full text-2xl py-4 rounded-md pl-20 border-2 border-[#0cb7d6] focus:bg-gray-400 ' />
            </div>

            <div className="relative bg -red-800">
                <div className="absolute left-10 text-2xl py-4">
                 < FontAwesomeIcon icon={faCalendar}  />
                </div>
                <input type="date"  className='w - [65%] w-full text-2xl py-4 rounded-md pl-20 border-2 border-[#0cb7d6] focus:bg-gray-400 ' />
            </div>
        </div>

        <button type='submit'>submit</button>
    </div>
       </form>
           

                       

     );
}
 
export default Form;