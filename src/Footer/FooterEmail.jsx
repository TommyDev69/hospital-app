import { useState } from "react";
import FooterConter from "./FooterConter";

const FooterEmail = () => {
    const [subscribe, SetSubcription] = useState('subscribe')

    const [email, setEmail] = useState({
        email: ''
    })
    const handleChange = (e) =>{
        const {name,value} = e.target
        setEmail((prevEmail) =>({
            ...prevEmail,
            [name] : value
        }))

    }

    const handleButton = () =>{
    SetSubcription('Subscribed')
    }
    return ( 
        <FooterConter handleValue = {email} handleChange = {handleChange} title={subscribe} clickMe = {handleButton} />
    );
}
 
export default FooterEmail;




