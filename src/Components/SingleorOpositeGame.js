import {trim} from "lodash";
import React from "react";


function SingleorOpositeGame({setsingleoroposite,setActivePage,firstplayer,setfirstplayer,firstplayerscore,setfirstplayerscore,secondplayer,setsecondplayer,secondplayerscore,setsecondplayerscore}) {
    return(

        <>
            <div className='flex justify-center items-center flex-col w-full max-w-full'>
                <div className="sm:flex max-w-full w-full md:w-fit d-sm-block">
                    <div className="md:max-w-full md:w-full">
                    <div className="text-center sm:w-64 ml-0 text-2xl mb-1 sm:text-4xl">Player 1</div>
                    <input onChange={(e=>{setfirstplayer(e.target.value)})} className='max-w-full w-full sm:w-64 rounded-xl border-0 px-3 h-10 outline-none mr-2' placeholder='Adınızı daxil edin' type="text" />
                    </div>
                    <img className="VSclass w-16 h-16 m-auto sm:my-3 md:mr-2" src="https://cdn-icons-png.flaticon.com/512/4049/4049075.png" alt=""/>
                    <div>
                    <div className="text-center text-2xl mb-1 sm:text-4xl">Player 2</div>
                    <input onChange={(e=>{setsecondplayer(e.target.value)})} className='max-w-full w-full sm:w-64 rounded-xl border-0 px-3 h-10 outline-none max-w-xs' placeholder='Adınızı daxil edin' type="text" />
                    </div>
                </div>


                <button
                    onClick={()=>{
                    if (trim(firstplayer).length>3 && trim(secondplayer).length>3) {
                        setsingleoroposite("startMantoMan")
                        setActivePage(10)
                    }
                }}
                        className='bg-black mt-9 text-white w-56 rounded-lg h-8'>Oyuna başla</button>
            </div>
        </>
    )
}

export default SingleorOpositeGame