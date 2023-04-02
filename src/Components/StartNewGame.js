import { trim } from 'lodash'
import React from 'react'

export default function StartNewGame({setLetsStart,setGameTime,letsStart,setActivePage,setDifficultOfGame,difficultOfGame}) {
const StartGameHandle = (e)=>{
    setLetsStart(e.target.value)
    
}

const DifficultOfGame = (e)=>{
    setDifficultOfGame(e.target.value)
}

  return (
    <div className='flex justify-center items-center flex-col'>
        <input onChange={(e)=>StartGameHandle(e)} className='w-96 rounded-xl border-0 px-3 h-10 outline-none max-w-xs' placeholder='Adınızı daxil edin' type="text" />
        <div className="sm:text-xl mt-2" onChange={(e)=>DifficultOfGame(e)}>
            <div className='text-center font-bold text-gray-500 text-2xl'>Çətinlik dərəcəsini seç</div>
            <input className='mx-1' type="radio" value='Asan' name='difficulty' />Asan(3 dəqiqə 30 saniyə)
            <input className='mx-1' type="radio" value='Orta' name='difficulty' />Orta(3 dəqiqə)
            <input className='mx-1' type="radio" value='Cetin' name='difficulty' />Çətin(2 dəqiqə)
        </div>
        <button onClick={()=>{
            if (trim(letsStart).length>3 && difficultOfGame!==null) {
                setActivePage(2)
                console.log(difficultOfGame)
            }
            setGameTime()
        }} className='bg-black mt-9 text-white w-56 rounded-lg h-8'>Oyuna başla</button>
    </div>
  )
}
