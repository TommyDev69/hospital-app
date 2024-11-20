import React from 'react'
// import React from 'react'

function Penatal({Penate}) {
  return (
    <div  className=" pr-10">
     
      {Penate.length > 0 ? (Penate.map((item) => (
          <div key={item.id} >
           <h1 className="text-[50px] font-500 text-[#1f1d1d]">{item.numb}</h1>
            <h2 className='text-3xl font-bold  text-[#1f1d1d]'>{item.topic}</h2>
            <p className='w-[80s%] text-xl'>{item.content} </p>
          </div>
        ))
      ) : (
        <p>No data found</p>
      )}
    </div>
  )
}

export default Penatal
