import { faPhone, faUser, faHome, faHospital} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectForm from "./SelectForm";
// import Receipt from "./Receipt";

const Form = ({handleSubmit, handForm, title}) => {

  
  return (
    <form onSubmit={handleSubmit} >
      <div>
        <div className="w-full flex uppercase pl-2 md:pl-6 py-2 md:text-[24px] text-xl font-bold">
          <h1 className=" pr-2 text-black ">book</h1>
          <h1 className=" text-[#0cb7d6]">appointment</h1>
        </div>
        <div className="grid w-full min-w-0 grid-cols-1 gap-3 px-4 py-3 sm:px-6 md:grid-cols-2 md:gap-4">
           
            <div className="relative min-w-0 pb-2">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-lg sm:left-4 sm:text-xl">
                <FontAwesomeIcon icon={faUser} />
                </div>
                <input type="text"  value={title.name} onChange={handForm} placeholder="Full name"
              className="w-full min-w-0 rounded-md border-2 border-[#0cb7d6] py-3 pl-10 pr-3 text-base focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0cb7d6] sm:py-3.5 sm:pl-12 sm:text-lg md:pl-12"
                />
                {/* <p className="text-red-500 pl-20 absolute top-[29px]">gggggggggggggggg</p> */}
            </div>
            <SelectForm/>
        </div>
      </div>

      <div className="grid w-full min-w-0 grid-cols-1 gap-3 px-4 py-3 sm:px-6 md:grid-cols-2 md:gap-4">
        <div className="relative min-w-0 pb-2">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-lg sm:left-4 sm:text-xl">
            <FontAwesomeIcon icon={faPhone} />
                
            </div>
            <input
                type="text"
               placeholder="Phone Number(+234)" value={title.phone} onChange={handForm}
                className="w-full min-w-0 rounded-md border-2 border-[#0cb7d6] py-3 pl-10 pr-3 text-base focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0cb7d6] sm:py-3.5 sm:pl-12 sm:text-lg md:pl-12"
            />
            </div>

            <div className="min-w-0 pb-2">
              
            <input type="date" name="calender" aria-label="Appointment date" value={title.calender} onChange={handForm} className="w-full min-w-0 rounded-md border-2 border-[#0cb7d6] px-3 py-3 text-base focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0cb7d6] sm:py-3.5 sm:text-lg" />
        </div>
      </div>

      <div className="grid w-full min-w-0 grid-cols-1 gap-3 px-4 py-3 sm:px-6 md:grid-cols-2 md:gap-4">
        <div className="relative min-w-0 pb-2">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-lg sm:left-4 sm:text-xl">
                <FontAwesomeIcon icon={faHome} />
            </div>
            <input
                type="text"
                placeholder="Home Address" value = {title.address} onChange={handForm}
                className="w-full min-w-0 rounded-md border-2 border-[#0cb7d6] py-3 pl-10 pr-3 text-base focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0cb7d6] sm:py-3.5 sm:pl-12 sm:text-lg md:pl-12"
            />
            </div>

            <div className="relative min-w-0 pb-2">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-lg sm:left-4 sm:text-xl">
                <FontAwesomeIcon icon={faHospital} />
            </div>
            <input
                type="text" placeholder="Diagonised*" value={title.diagnosed} onChange={handForm}
                className="w-full min-w-0 rounded-md border-2 border-[#0cb7d6] py-3 pl-10 pr-3 text-base focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0cb7d6] sm:py-3.5 sm:pl-12 sm:text-lg md:pl-12"
            />
        </div>
      </div>
      

      <div className="flex justify-center px-6 pb-4">
        <button type="submit" className="rounded-lg border-2 border-[#0cb7d6] px-6 py-2 text-lg font-medium hover:bg-[#0cb7d6] hover:text-white sm:text-xl" >submit</button>
     
     </div>
    </form>
  );
};

export default Form;
