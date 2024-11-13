import React from "react";
import img from '../images/about-img.png'

const AboutUs = () => {
    const about = ['about hospital', '../images/about-img.png']
let aboutResult =about.filter(aboutUs => aboutUs === 'about hospital')
console.log(about[1]);

    return ( 
        <div className="grid md:grid-cols-2 px-gauto min-w-full">
            <div className="   w-[90%]  pl-20 mx-ahuto">
                <h1 className="capitalize text-[40px] font-[500] text-[Poppins, sans-serif] font-[Poppins, sans-serif] ">{aboutResult[0]}</h1>
                <p className="leading-6 w-[90%]  text-md text-left pt-[30px] "> 
                An E-Hospital is a healthcare facility that utilizes digital technologies and information systems
                 to manage and deliver medical services. The term "e-hospital" typically refers to an online platform 
                 or a physical hospital that integrates Information and Communication Technology (ICT) to streamline
                  operations, improve patient care, and enhance the overall healthcare experience.
                </p>
            </div>

             <div className="md:py-0 py-[30px] mx-aubto">
               
                <img src={img} alt="" className="min-w-[80%] md:w-1/2 mx-aujto" />
               
            </div>
        </div>
     );
}
 
export default AboutUs;