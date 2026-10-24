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

                 <input type="text"  className="my-4 ml-[5%] w-[90%] min-w-0 rounded-xl border-2 px-4 py-4 text-base sm:my-6 sm:px-6 sm:py-5 sm:text-lg md:ml-[15%] md:w-[80%] md:text-xl" name="names" value={Val.names} onChange={handleChange} placeholder="Full name (Surname Firstname Middlename)" />
            </div>
            <div>

                <input type="text"  className="my-4 ml-[5%] w-[90%] min-w-0 rounded-xl border-2 px-4 py-4 text-base sm:my-6 sm:px-6 sm:py-5 sm:text-lg md:ml-[15%] md:w-[80%] md:text-xl" name="phone" value={Val.phone} onChange={handleChange} placeholder="Phone number (+country code)" />
            </div>
            
           
           <div className="grid md:grid-cols-2  min-w-full mhl-[15%]">
            <div>

                <select  className="my-4 ml-[5%] w-[90%] min-w-0 rounded-xl border-2 px-4 py-4 text-base sm:my-6 sm:px-6 sm:py-5 sm:text-lg md:ml-[15%] md:w-[70%] md:text-xl" name="select" value={Val.select} onChange={handleChange} >
                   <option value="">Choose state</option>
                </select>
            </div>

            <div >
                <select  className="my-4 ml-[5%] w-[90%] min-w-0 rounded-xl border-2 px-4 py-4 text-base sm:my-6 sm:px-6 sm:py-5 sm:text-lg md:ml-[15%] md:w-[70%] md:text-xl" name="select" value={Val.select} onChange={handleChange} >
                    <option value="" >Choose country</option>
                    {countryApi && countryApi.map((country,index) =>

                    <option key={index} value={country.name.common} >{country.name.common}</option>
                    )}
                </select>
            </div>

            </div> 
            <div>
                
                 <input type="email"  className="my-4 ml-[5%] w-[90%] min-w-0 rounded-xl border-2 px-4 py-4 text-base sm:my-6 sm:px-6 sm:py-5 sm:text-lg md:ml-[15%] md:w-[80%] md:text-xl" name="select" value={Val.select} onChange={handleChange} placeholder="Valid email" />
            </div>

            <div>
                
               <textarea  className="my-4 ml-[5%] min-h-48 w-[90%] min-w-0 resize-y rounded-xl border-2 px-4 py-4 text-base sm:my-6 sm:px-6 sm:py-5 sm:text-lg md:ml-[15%] md:w-[80%] md:text-xl" name="email" value={Val.email} onChange={handleChange} placeholder="Write your message" />
            </div>

            {/* <br /> */}
            <div>

                <button type="submit" className="mx-auto mb-6 block rounded-xl border-2 bg-blue-800 px-6 py-3 text-base text-white hover:bg-blue-900 sm:text-lg">Submit</button>
            </div>
        </div>
    </form>
  )
}
export default FormModule;
