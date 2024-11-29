import React from "react";
// import React from "react"

function FormModule({Val, handleChange, countryApi}) {
//     if (!Val) {
//     return <div>Loading...</div>; // Check if Val is available before rendering
//   }
  return (
    <form action="">
        <div className=" min-w-full ">
            <div>

                 <input type="text"  className="border-2 w-[80%] my-8 md:ml-[15%] ml-[10%] px-20 py-8 text-[24px] rounded-3xl" name="names" value={Val.names} onChange={handleChange} placeholder="Full name(Surname Firstname Middlename)" />
            </div>
            <div>

                <input type="text"  className="border-2 w-[80%] my-8 md:ml-[15%] ml-[10%] px-20 py-8 text-[24px] rounded-3xl" name="phone" value={Val.phone} onChange={handleChange} placeholder="Phone-Number:(+country code)-Number" />
            </div>
            
           
           <div className="grid md:grid-cols-2  min-w-full mhl-[15%]">
            <div>

                <select  className="border-2 w-[80%] md:w-[70%]  my-8 md:ml-[15%] ml-[10%] md:ml-[30%]  px-20 py-8 text-[24px] rounded-3xl" name="select" value={Val.select} onChange={handleChange} >
                   <option value="">Choose state</option>
                </select>
            </div>

            <div >
                <select  className="border-2  my-8 w-[80%] md:w-[70%] md:ml-[20%] md:ml-[15%] ml-[10%] px-20 py-8 text-[24px] rounded-3xl" name="select" value={Val.select} onChange={handleChange} >
                    <option value="" >Choose country</option>
                    {countryApi && countryApi.map((country,index) =>

                    <option key={index} value={country.name.common} >{country.name.common}</option>
                    )}
                </select>
            </div>

            </div> 
            <div>
                
                 <input type="text"  className="border-2 w-[80%] my-8 md:ml-[15%] ml-[10%] px-20 py-8 text-[24px] rounded-3xl" name="select" value={Val.select} onChange={handleChange} placeholder="Valid Email" />
            </div>

            <div>
                
               <textarea  className="border-2 w-[80%] min-h-[300px] my-8 md:ml-[15%] ml-[10%] px-20 py-8 text-[24px] rounded-3xl" name="email" value={Val.email} onChange={handleChange} placeholder="Write message  of Testimony" />
            </div>

            {/* <br /> */}
            <div>

                <button type="submit" className="bg-blue-800 text-[20px] text-white border-2 rounded-2xl  md:ml-[45%] ml-[30%] px-20 py-6 ">Submit</button>
            </div>
        </div>
    </form>
  )
}
export default FormModule;
