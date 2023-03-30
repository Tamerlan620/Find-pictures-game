import {trim} from "lodash";
import React from "react";


function SingleorOpositeGame({setsingleoroposite,setActivePage,firstplayer,setfirstplayer,firstplayerscore,setfirstplayerscore,secondplayer,setsecondplayer,secondplayerscore,setsecondplayerscore}) {
    return(

        <>
            <div className='flex justify-center items-center flex-col'>
                <div className="flex">
                    <div>
                    <div className="text-2xl pl-9 mb-1">Player 1</div>
                    <input onChange={(e=>{setfirstplayer(e.target.value)})} className='w-64 rounded-xl border-0 px-3 h-10 outline-none mr-2' placeholder='Adınızı daxil edin' type="text" />
                    </div>
                    <img className="VSclass w-16 h-16" src="https://cdn-icons-png.flaticon.com/512/4049/4049075.png" alt=""/>
                    <div>
                    <div className="text-2xl pl-10 mb-1">Player 2</div>
                    <input onChange={(e=>{setsecondplayer(e.target.value)})} className='w-64 rounded-xl border-0 px-3 h-10 outline-none ml-2' placeholder='Adınızı daxil edin' type="text" />
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