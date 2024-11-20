import React from 'react'

export default function Pediatrician( {Pediatric}) {
  return (
    <div>
      {Pediatric.length >0 ? (Pediatric.map(item =>
        <div key={item.id} >
        <h1 className="text-[50px] font-500 text-[#1f1d1d]">{item.numb}</h1>
       <h2 className='text-3xl font-bold  text-[#1f1d1d]'>{item.topic}</h2>
       <p className='w-[89s%] text-xl'>{item.content}</p>
       </div>
      )):(
        <p>no data</p>
      )}
    </div>
  )
}
