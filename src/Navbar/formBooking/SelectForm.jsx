import { useState } from "react";
import {faSortNumericAsc } from "@fortawesome/free-solid-svg-icons";
  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SelectForm = ({selectValue}) => {
      // select feild of public doctor and Private doc Appointment
  const select = [
    { id: 1, doctor: "Public Hospital Doctor" },
    { id: 2, doctor: "Private Hospital Doctor" },
  ];

  // State for the selected doctor and generated numbers
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentNumber, setAppointmentNumber] = useState(null);

  const formSelect = (e) => {
    const selected = e.target.value; // Get selected doctor
    setSelectedDoctor(selected); // Set selected doctor

    let numb;
    if (selected === "Public Hospital Doctor") {
      numb = Math.floor(Math.random() * 500); // Random number between 0 and 500 for Public Doctor
    } else if (selected === "Private Hospital Doctor") {
      numb = Math.floor(Math.random() * 100); // Random number between 0 and 100 for Private Doctor
    } else {
      numb = "";
    }

    

    setAppointmentNumber(numb);
    
  };

    return ( 
        
        <div className="relative min-w-0 pb-2">
        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg sm:left-4 sm:text-xl">
          <FontAwesomeIcon icon={faSortNumericAsc} />
        </div>

        <select
          onChange={formSelect}
          className="w-full min-w-0 appearance-none rounded-md border-2 border-[#0cb7d6] bg-white py-3 pl-10 pr-3 text-base capitalize focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0cb7d6] sm:py-3.5 sm:pl-12 sm:text-lg"
        >
          <option className="capitalize text-2xl">book doctor appointment </option>
          {select.map((selectItem) => (
            <option key={selectItem.id} value={selectItem.doctor || ""}>
              {selectItem.doctor}
            </option>
          ))}
        </select>

        {selectedDoctor && appointmentNumber !== null && (
          <div className="pb-6 mt-6">
            {/* Display appointment number in input */}
            <input
              type="text"
              value={`Appointment Number: ${appointmentNumber}`} // Show appointment number in the input field
              readOnly // Make the input field read-only, as the number shouldn't be edited
              className="w-full min-w-0 rounded-md border-2 border-[#0cb7d6] px-3 py-3 text-sm focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0cb7d6] sm:px-4 sm:text-base"
            />
          </div>
        )}
      </div>
     );
}
 
export default SelectForm;