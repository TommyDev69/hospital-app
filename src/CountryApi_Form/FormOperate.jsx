import React, { useState } from 'react'
import FormModule from '../CountryApi_Form/FormModule'
import useFetch from './useFetch'

function FormOperate() {
    // const {Countries:data,loading,error} = useFetch("https://https://restcountries.com/v3.1/all")
    const [formValue, setValue] = useState({
        names: '',
        phone: '',
        select: '',
        email: '',
        message: '',
})

const handleChange = (e)=>{
 const {name, value} = e.target
 setValue((prevName)=>({
    ...(prevName),
    [name]: value,
 }))
}
  return (
    <div>
        {/* {error && <div>Error in network </div>}
        {loading && <div>Loading resposes....</div>} */}
       <FormModule Val = {formValue} handleChange= {handleChange}  />
    </div>
  )
}
export default FormOperate
