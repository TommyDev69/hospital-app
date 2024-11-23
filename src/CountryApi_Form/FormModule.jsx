import React from "react"

export default function FormModule() {
  return (
    <form action="">
        <div className="bg-red-400 min-w-full ">
            <div>

                 <input type="text"  className="border-2 w-[70%] my-8 ml-[15%] px-20 py-8 text-[24px] rounded-3xl" value='' onChange='' placeholder="Full name(Surname Firstname Middlename)" />
            </div>
            <div>

                <input type="text"  className="border-2 w-[70%] my-8 ml-[15%] px-20 py-8 text-[24px] rounded-3xl" value='' onChange='' placeholder="Phone-Number:(+country code)-Number" />
            </div>
            
           
           <div className="grid md:grid-cols-2  min-w-full mhl-[15%]">
            <div>

                <select  className="border-2 w-[70%] md:w-[65%]  my-8 ml-[15%] md:ml-[30%]  px-20 py-8 text-[24px] rounded-3xl" value='' onChange='' >
                   <option value="">Choose state</option>
                </select>
            </div>

            <div >
                <select  className="border-2  my-8 w-[70%] md:w-[65%] md:ml-[5%] ml-[15%] px-20 py-8 text-[24px] rounded-3xl" value='' onChange='' >
                    <option value="">Choose country</option>
                </select>
            </div>

            </div> 
            <div>
                
                 <input type="text"  className="border-2 w-[70%] my-8 ml-[15%] px-20 py-8 text-[24px] rounded-3xl" value='' onChange='' placeholder="Valid Email" />
            </div>

            <div>
                
               <textarea  className="border-2 w-[70%] min-h-[300px] my-8 ml-[15%] px-20 py-8 text-[24px] rounded-3xl" value='' onChange='' placeholder="Write message  of Testemony" />
            </div>

            {/* <br /> */}
            <div>

                <button type="submit" className="bg-blue-800 text-[20px] text-white border-2 rounded-2xl  ml-[45%] px-20 py-6 ">Submit</button>
            </div>
        </div>
    </form>
  )
}
