import React from "react";

function PatientMap({ record, currentIndex }) {
  return (
    <div className="relative w-full  mx-auto py-20">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Move the slides by the currentIndex value
        >
          {record.map((item) => (
            <div className="w-full flex-shrink-0 px-4 " key={item.id}>
              <div className="shadow-2xl  mx-auto py-10 w-[80%] md:w-[50%] bg-white border-2 shadow-[#7dd8e9] px-6">
                <p className="text-[20px] md:text-[40px] font-semibold py-3">{item.patient_name}@{item.age}</p>
                <p className="text-[12px] md:text-[20px] capitalize">
                  Diagnosed with: <span className="font-bold py-4">{item.condition}</span>
                </p>
                <p className="text-[10px] md:text-[20px] text-justify pt-4"><span className="font-bold py-4">Testimony:-</span>{item.testimony}</p>
                <p className="text-[10px] md:text-[20px] text-justify pt-4"><span className="font-bold py-4">location:-</span>{item.location}, {item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PatientMap;

