import React from "react";

const DoctorsPro = ({ data, image }) => {
    return (
        <div className="grid md:grid-cols-3 gap-[11rem] md:gap-0 rounded-l-[150px] min-w-full rounded-r-[150px] bg-[#1a3237] pt-80 pb-48">
            {data.map((items, index) => (
                <div
                    className="transition-opacity shrink-0 duration-500 md:min-w-[80%] min-w-[55%] rounded-3xl ml-[8rem] bg-gray-100 md:ml-[48px] md:mr-[88px] mr-[9rem] border-2"
                    key={items.id}
                >
                    <div className="w-full min-h-72 relative mdv:pl-8 md:pr-20 pl-8 ptr-5">
                        {/* Displaying the image associated with this doctor */}
                        <img
                            src={image[index % image.length].image}  // Using modulus to cycle images if there are more doctors than images
                            alt={items.doctor_name}
                            key={items.id}
                            className="w-[90%] absolute md:top-[-70px] left-[10px] md:left-[50px] bottom-[-6px] md:w-[80%] mx-auto"
                        />
                    </div>
                    <div className="pt-[3rem] md:pt-60 text-center pb-16">
                        <h1 className="text-[28px] font-bold text-center">{items.doctor_name}</h1>
                        <p className="w-full text-2xl text-center pb-4">{items.dept}</p>
                        <p className="text-xl text-center w-[80%] pl-[20px] pr-10 mx-auto border-2 pb-4">{items.about}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DoctorsPro;
