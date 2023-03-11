import React, { Fragment } from 'react'

export default function YouLose({setActivePage}) {
  return (
    <div className='h-full flex justify-content-center flex-col items-center'>
        <div className='text-center text-red-400 font-extrabold text-6xl mb-5'>Təəssüf vaxtınız bitdi.Yenidən başlamaq üçün <strong>Yenidən başla</strong> düyməsinə tıklaya bilərsiniz.</div>
        <img style={{width:"400px",height:"400px"}} src="https://media.tenor.com/dtzOH_d89BsAAAAM/coin-op-coin.gif" alt=""/>



        <button onClick={()=>setActivePage(1)} className='bg-black mt-3 text-white w-56 rounded-lg h-8'>Yenidən başla</button>
    </div>
  )
}
