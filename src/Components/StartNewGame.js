import { trim } from 'lodash'
import React from 'react'
import './StartGame.css'

export default function StartNewGame({setLetsStart,setGameTime,letsStart,setActivePage,setDifficultOfGame,difficultOfGame}) {
const StartGameHandle = (e)=>{
    setLetsStart(e.target.value)
    
}

const DifficultOfGame = (e)=>{
    setDifficultOfGame(e.target.value)
}

  return (
    <div className='h-screen flex justify-center items-center flex-col'>
        <h1 className='text-red-500 text-5xl font-extrabold mb-9'>Eyni şəkili tap oyununa xoş gəlmisiniz</h1>
        <input onChange={(e)=>StartGameHandle(e)} className='w-96 rounded-xl border-0 my-9 px-3 h-10 outline-none' placeholder='Adınızı daxil edin' type="text" />
        <div onChange={(e)=>DifficultOfGame(e)}>
            <div className='text-center font-bold text-gray-500 text-2xl'>Çətinlik dərəcəsini seç</div>
            <input className='mx-1' type="radio" value='Asan' name='difficulty' />Asan(1 dəqiqə 30 saniyə)
            <input className='mx-1' type="radio" value='Orta' name='difficulty' />Orta(1 dəqiqə)
            <input className='mx-1' type="radio" value='Cetin' name='difficulty' />Çətin(30 saniyə)
        </div>
        <button onClick={()=>{
            if (trim(letsStart).length>3 && difficultOfGame) {
                setActivePage(2)

            }
            setGameTime()
        }} className='bg-black mt-9 text-white w-56 rounded-lg h-8'>Oyuna başla</button>
    </div>
  )
}
