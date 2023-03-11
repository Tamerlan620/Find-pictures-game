import React, { Fragment } from 'react'

export default function YouWon({setActivePage}) {
  return (
    <div className='h-full flex justify-content-center flex-col items-center'>
        <div className='text-center text-yellow-300 font-extrabold text-6xl mb-5'>Təbriklər siz qalib gəldiniz.Yenidən başlamaq üçün <strong>Yenidən başla</strong> düyməsinə tıklaya bilərsiniz.</div>

        <img src="https://www.funimada.com/assets/images/cards/big/congrats-13.gif" alt=""/>

        <button onClick={()=>setActivePage(1)}  className='bg-black mt-3 text-white w-56 rounded-lg h-8'>Yenidən başla</button>
    </div>
)
}
