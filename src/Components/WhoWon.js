import React, { Fragment } from 'react'

export default function WhoWon({setActivePage,firstplayer, firstplayerscore, secondplayer, secondplayerscore}) {
    return (
        <div className='h-full flex justify-content-center flex-col items-center'>
            <div className='text-center text-yellow-300 font-extrabold text-6xl mb-5'>
                {firstplayerscore>secondplayerscore ? firstplayer : firstplayerscore<secondplayerscore ? secondplayer : null }
                 Təbriklər siz qalib gəldiniz.</div>

            <img src="https://www.funimada.com/assets/images/cards/big/congrats-13.gif" alt=""/>

            <button onClick={()=>window.location.reload()}  className='bg-black mt-3 text-white w-56 rounded-lg h-8'>Yenidən başla</button>
        </div>
    )
}
