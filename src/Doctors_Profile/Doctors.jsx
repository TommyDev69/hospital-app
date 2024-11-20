import { useState } from "react";
import DoctorsPro from "./DoctorPro";
import image1 from '../images/img-1.png'
import image2 from '../images/img-2.png'
import image3 from '../images/img-3.png'

const Dorctors = () => {
    const [doctors, setDoctors] = useState([
        {
            id: 1,
            doctor_name : 'Dr Linux', 
            dept:'Medicine and Surgies',
            about: 'I am a highly skilled and compassionate surgeon with extensive experience in performing complex surgeries and providing comprehensive patient care. With a commitment to excellence in both clinical practice and patient outcomes, I specialize in [specific surgical area, e.g., general surgery, orthopaedic surgery, cardiovascular surgery, etc.]. My goal is to improve the quality of life for my patients through evidence-based practices, minimally invasive techniques, and dedicated post-surgical care.',
            image: image3
        },

        {
            id: 2,
            doctor_name : 'Dr cruffy', 
            dept:'Microbiogy and anatomy',
            about: 'I am a dedicated and experienced medical doctor with a deep focus on microbiology and infectious diseases. With a passion for improving patient outcomes and advancing clinical knowledge, I bring a strong foundation in the diagnosis, treatment, and prevention of infectious diseases. My medical expertise spans across bacterial, viral, fungal, and parasitic infections, as well as the complexities of antimicrobial resistance and infection control in hospital settings.',
            image: image2
        },

        {
            id: 3,
            doctor_name : 'Pham plutonian', 
            dept:'Pharmacy',
            about: 'I am a dedicated and detail-oriented pharmacist with a strong passion for optimizing patient care through the safe and effective use of medications. With a comprehensive understanding of pharmacology, therapeutics, and patient counseling, I specialize in medication therapy management, clinical consultations, and ensuring optimal drug therapy outcomes.',
            image: image1
        }
    ])

    // const [data, setData] = useState("")
    return ( 
        <div>
         
            <DoctorsPro data = {doctors} />
        </div>

     );
}
 
export default Dorctors;