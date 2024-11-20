import { useState } from "react";
import Nephro from "./Nephro";
import EyesCare from "./EyesCare";
import Pediatrician from "./Pediatrician";
import Penatal from "./Penatal";



const MainOperation = () => {
    const data = [
        {   id: 1,
            numb: '01', 
            topic: 'Nephrologist Care',
            content: "alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything"
        },

        {   id: 2,
            numb: '02', 
            topic: 'Eyes Care',
            content: "alteration in some form, by injected humour, or randomised words which don't look even"
        },
        
        {   id: 3,
            numb: '03', 
            topic: 'Pediatrician Clinic',
            content: "alteration in some form, by injected humour, or randomised words which don't look even"
        },

        {   id: 4,
            numb: '04', 
            topic: 'Prenatal Care',
            content: "alteration in some form, by injected humour, or randomised words which don't look even"
        },
    ]

    const [TreatContent, setTreatContent] = useState(data)

    let nephro = TreatContent.filter(item => item.id === 1)
    let eyes = TreatContent.filter(item => item.id === 2)
    let pediatrician = TreatContent.filter(item => item.id === 3)
    let penate = TreatContent.filter(item => item.id === 4)


    return (  
            <div className="md:flex md:items-left floact-left gap-8">
                <Nephro Nephro = {nephro} />
                <EyesCare Eye={eyes} />
               <Pediatrician Pediatric ={pediatrician}/>
               <Penatal Penate = {penate} />
                
            </div> 
    );
}
 
export default MainOperation;