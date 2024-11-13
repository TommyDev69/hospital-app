import React, { useState } from "react";

import { faPhone, faUser, faCalendar, faHospital} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectForm from "./SelectForm";

const Form = () => {

  const [title, setTitle] = useState({
    name: "",
    phone: "",
    address: '',
    calender : '',
    diagnosed:""
  });

  const handForm = (e) => {
    const { name, phone, calender, address, diagnosed, value } = e.target;
    // const {phone, value} = e.target

   setTitle({
      [name] : value,
      [phone] : value,
      [calender] : value,
      [address] : value,
      [diagnosed] : value
    });

  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting by default

    // Destructure the values from the title state
    const { name, phone, calendar, address, diagnosed } = title;
  
    // Check if any of the fields are empty
    if (name === '' || phone === '' || calendar === '' || address === '' || diagnosed === '') {
      // If any field is empty, show an error message or handle the error
     alert('Please fill in all fields');
      return; // Stop the function here and prevent the form from being submitted
    }
  
    // If all fields are valid, proceed with form submission logic
    alert('Form submitted with values:', { name, phone, calendar, address, diagnosed });
  
    // Optionally, you can now send the data to an API or reset the form
  };
  return (
    <form onSubmit={handleSubmit} >
      <div>
        <div className="w-full flex uppercase pl-6 py-2 md:text-[24px] text-xl font-bold">
          <h1 className="w-h1/2 pr-2 text-black ">book</h1>
          <h1 className="w-f1/2 text-[#0cb7d6]">appointment</h1>
        </div>
        <div className="grid min-w-full md:grid-cols-2 py-4 md:space-x-4 space-x-0 px-6">
           
            <div className="relative pb-6 ">
                <div className="absolute left-10 text-2xl py-4">
                <FontAwesomeIcon icon={faUser} />
                </div>
                <input type="text"  value={title.name} onChange={handForm} placeholder="Full name"
                className=" w-full text-2xl py-4 rounded-md pl-20 border-2 border-[#0cb7d6] focus:bg-gray-400 "
                />
                <p className="text-red-500 pl-20 absolute top-[29px]">gggggggggggggggg</p>
            </div>
            <SelectForm/>
        </div>
      </div>

      <div className="grid min-w-full md:grid-cols-2 py-4 md:space-x-4 space-x-0 px-6">
        <div className="relative  pb-6 ">
            <div className="absolute left-10 text-2xl py-4">
            <FontAwesomeIcon icon={faPhone} />
                
            </div>
            <input
                type="text"
               placeholder="Phone Nmuber(+234)" value={title.phone} onChange={handForm}
                className=" w-full text-2xl py-4 rounded-md pl-20 border-2 border-[#0cb7d6] focus:bg-gray-400 "
            />
            </div>

            <div className="relative bg -red-800">
              <div className="absolute left-10 text-2xl py-4">
                <FontAwesomeIcon icon={faCalendar} />
              </div>
            <input type="date" placeholder="date*" value={title.calender} onChange={handForm} className=" w-full text-2xl py-4 rounded-md pl-20 border-2 border-[#0cb7d6] focus:bg-gray-400 "/>
        </div>
      </div>

      <div className="grid min-w-full md:grid-cols-2 py-4 md:space-x-4 space-x-0 px-6">
        <div className="relative  pb-6 ">
            <div className="absolute left-10 text-2xl py-4">
                <FontAwesomeIcon icon={faUser} />
            </div>
            <input
                type="text"
                placeholder="Home Address" value = {title.address} onChange={handForm}
                className=" w-full text-2xl py-4 rounded-md pl-20 border-2 border-[#0cb7d6] focus:bg-gray-400 "
            />
            </div>

            <div className="relative bg -red-800">
            <div className="absolute left-10 text-2xl py-4">
                <FontAwesomeIcon icon={faHospital} />
            </div>
            <input
                type="text" placeholder="Diagonised*" value={title.diagnosed} onChange={handForm}
                className=" w-full text-2xl py-4 rounded-md pl-20 border-2 border-[#0cb7d6] focus:bg-gray-400 "
            />
        </div>
      </div>

     <div className="pb-6">
        <button type="submit"  className="border-2 mx-[47%] rounded-lg  border-[#0cb7d6] px-6 py-2 text-2xl font-[500] hover:bg-[#0cb7d6] hover:text-white">submit</button>
     
     </div>
    </form>
  );
};

export default Form;
