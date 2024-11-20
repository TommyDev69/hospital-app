import React from 'react'

 function EyesCare({Eye}) {
  return (
    <div>
         {Eye.length > 0 ? (Eye.map((eyeCare) => (
            <div key={eyeCare.id} >
              <h1 className="text-[50px] font-500 text-[#1f1d1d]">{eyeCare.numb}</h1>
             <h2 className='text-3xl font-bold  text-[#1f1d1d]'>{eyeCare.topic}</h2>
             <p className='w-[89s%] text-xl'>{eyeCare.content}</p>
           </div>

        )) 
        ) :(
            <p>No data found</p>
        )}
    </div>
   
      
  )
}
export default EyesCare