import React from "react";
import img from '../images/about-img.png'

const AboutUs = () => {
    const about = ['about hospital', '../images/about-img.png']
let aboutResult =about.filter(aboutUs => aboutUs === 'about hospital')
console.log(about[1]);

    return ( 
        <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-2 md:items-center md:gap-12 md:px-12 md:py-20">
            <div className="w-full">
                <h1 className="text-3xl font-medium capitalize md:text-[45px]">{aboutResult[0]}</h1>
                <p className="w-full pt-5 text-left text-base leading-relaxed sm:text-lg md:text-xl">
                An E-Hospital is a healthcare facility that utilizes digital technologies and information systems
                 to manage and deliver medical services. The term "e-hospital" typically refers to an online platform 
                 or a physical hospital that integrates Information and Communication Technology (ICT) to streamline
                  operations, improve patient care, and enhance the overall healthcare experience.
                </p>
            </div>

            <div className="flex justify-center py-2 md:py-0">
               
                <img src={img} alt="Hospital care" className="h-auto w-full max-w-lg object-contain" />
               
            </div>
        </section>
     );
}

export default AboutUs;