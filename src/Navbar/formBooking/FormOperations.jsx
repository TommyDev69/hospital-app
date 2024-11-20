import { useState } from "react";
import Form from "./Form";

const FormOperations = ({onSubmit}) => {
    
    const [title, setTitle] = useState({
        name: "",
        phone: "",
        address: '',
        calender : '',
        diagnosed:""
      });
    
      const handForm = (e) => {
        const { name, phone, calender, address, diagnosed, value } = e.target;
        // const {phone, value} = e.target
    
        setTitle({
            [name] : value,
            [phone] : value,
            [calender] : value,
            [address] : value,
            [diagnosed] : value
          });
    
            // OR USE THIS

        setTitle((prevTitle) => ({
            ...prevTitle,
            [name]: value,
          }));
      };

      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the form from submitting by default
    
        // Destructure the values from the title state
        const { name, phone, calendar, address, diagnosed } = title;
        // console.log( title);
       
        if (name === '' || phone === '' || calendar === '' || address === '' || diagnosed === '') {
          
         alert('Please fill in all fields');
         console.log("Form must submit", title);
          return; 
        }else{
            
            alert('Form submitted with values: ', { name, phone, calendar, address, diagnosed });
            console.log("Form Submitted", title);
            // onSubmit(title)
        }
    
      
    };
      
    return (  
        <Form  handForm = { handForm} title = {title} handleSubmit={handleSubmit}/>
    );
}
 
export default FormOperations