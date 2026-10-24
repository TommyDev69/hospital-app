import React from "react";

const DoctorsPro = ({ data, image }) => {
    return (
        <div className="grid w-full min-w-0 grid-cols-1 gap-24 overflow-hidden bg-[#1a3237] px-4 py-16 sm:px-6 md:grid-cols-3 md:gap-8 md:px-8 md:py-24">
            {data.map((items, index) => (
                <div
                    className="mx-auto w-full max-w-sm min-w-0 rounded-3xl border-2 bg-gray-100 transition-opacity duration-500"
                    key={items.id}
                >
                    <div className="relative min-h-72 w-full px-4">
                        {/* Displaying the image associated with this doctor */}
                        <img
                            src={image[index % image.length].image}  // Using modulus to cycle images if there are more doctors than images
                            alt={items.doctor_name}
                            key={items.id}
                            className="absolute bottom-[-6px] left-1/2 w-[90%] max-w-[280px] -translate-x-1/2 md:bottom-auto md:top-[-70px]"
                        />
                    </div>
                    <div className="px-4 pb-8 pt-12 text-center md:pt-24">
                        <h1 className="text-center text-2xl font-bold">{items.doctor_name}</h1>
                        <p className="w-full break-words pb-4 text-center text-xl">{items.dept}</p>
                        <p className="mx-auto w-full break-words border-2 px-3 pb-4 text-center text-base sm:text-lg">{items.about}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DoctorsPro;
