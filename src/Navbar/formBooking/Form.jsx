import React, { useState } from "react";

import { faPhone, faUser, faCalendar, faHospital} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectForm from "./SelectForm";

const Form = () => {

  const [title, setTitle] = useState({
    name: "",
    phone: "",
  });

  const handForm = (e) => {
    const { name, phone, value } = e.target;
    // const {phone, value} = e.target

    setTitle({
      [name]: value,
      [phone]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} cla>
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
               placeholder="Phone Nmuber(+234)"
                className=" w-full text-2xl py-4 rounded-md pl-20 border-2 border-[#0cb7d6] focus:bg-gray-400 "
            />
            </div>

            <div className="relative bg -red-800">
            <div className="absolute left-10 text-2xl py-4">
            <FontAwesomeIcon icon={faCalendar} />
            </div>
            <input
                 type="date" placeholder="date*"
                className=" w-full text-2xl py-4 rounded-md pl-20 border-2 border-[#0cb7d6] focus:bg-gray-400 "
            />
        </div>
      </div>

      <div className="grid min-w-full md:grid-cols-2 py-4 md:space-x-4 space-x-0 px-6">
        <div className="relative  pb-6 ">
            <div className="absolute left-10 text-2xl py-4">
                <FontAwesomeIcon icon={faUser} />
            </div>
            <input
                type="text"
                placeholder="Home Address"
                className=" w-full text-2xl py-4 rounded-md pl-20 border-2 border-[#0cb7d6] focus:bg-gray-400 "
            />
            </div>

            <div className="relative bg -red-800">
            <div className="absolute left-10 text-2xl py-4">
                <FontAwesomeIcon icon={faHospital} />
            </div>
            <input
                type="text" placeholder="Diagonised*"
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
