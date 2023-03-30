import './index.css';
import Pictures from "./Pictures";
import React, {useEffect, useState} from "react";
import {shuffle, trim} from 'lodash';
import Game from './Components/Game';
import StartNewGame from './Components/StartNewGame';
import YouWon from './Components/YouWon';
import YouLose from './Components/YouLose';
import SingleorOpositeGame from './Components/SingleorOpositeGame';
import ManToMan_Start from "./Components/Man-to-Man_Start";
import WhoWon from "./Components/WhoWon";



function App() {
    const [cards,setCard] = useState(shuffle([...Pictures,...Pictures]));
    const [activeCard,setActiveCard] = useState([]);
    const [matched,setMatched] = useState([]);
    const [activePage,setActivePage]= useState(1);
    const [letsStart,setLetsStart] = useState('');
    const [difficultOfGame,setDifficultOfGame] = useState(null)
    const [singleoroposite,setsingleoroposite] = useState(null)
    const [firstplayer,setfirstplayer] = useState(null)
    const [firstplayerscore,setfirstplayerscore] = useState(0)
    const [secondplayer,setsecondplayer] = useState(null)
    const [secondplayerscore,setsecondplayerscore] = useState(0)
    const [time,setTime] = useState(Number)
    const [Player,setPlayer] = useState(true)


    const HandleClicktoActive = (index)=>{
        
        if (activeCard.length === 0) {
            setActiveCard([index])
        }
        if (activeCard.length === 1) {
            if (activeCard[0]!==index) {
                setActiveCard([...activeCard,index])
                const FirsCard      = activeCard[0]
                const SecondCard    = index
                // console.log(activeCard[0],index);
                if (cards[FirsCard]===cards[SecondCard]) {
                    setMatched([...matched,FirsCard,SecondCard])
                }
            }
        }
        if (activeCard.length === 2) {
            setActiveCard([index])          
        }
    }

    const HandleClicktoActiveManToMan = (index)=>{
        console.log(matched.length)
        console.log(singleoroposite,activePage)

                if (activeCard.length === 0) {
                    setActiveCard([index])
                }
                if (activeCard.length === 1) {
                    if (matched.length===34){
                        setsingleoroposite('WhoWon')
                    }
                    if (activeCard[0]!==index) {
                        setActiveCard([...activeCard,index])
                        const FirsCard      = activeCard[0]
                        const SecondCard    = index
                        // console.log(activeCard[0],index);
                        if (cards[FirsCard]===cards[SecondCard]) {
                            setMatched([...matched,FirsCard,SecondCard])
                            if (Player){
                                setfirstplayerscore(()=>firstplayerscore+1)
                            }else{
                                setsecondplayerscore(()=>secondplayerscore+1)
                            }
                        }else{
                            setPlayer(!Player)
                        }
                    }
                }
                if (activeCard.length === 2) {

                    setActiveCard([index])

                }

    }

    const setGameTime = ()=>{
        console.log("salam")
        if (difficultOfGame==='Asan') {
            setTime(210)
        }
        if (difficultOfGame==='Orta') {
            setTime(180)
        }
        if (difficultOfGame==='Cetin') {
            setTime(120)
        }
        
    }
    useEffect(()=>{
      if (activePage===2){
        const TimeOut =
            time>0 && setInterval(() => {
                setTime((time)=>time-1)
            }, 1000);
        if (time===0){
        setActivePage(4)
        setMatched([])
            console.log(activePage)

        }
          if (matched.length===36){
            setActivePage(3)
            setMatched([])

          }
          return () =>clearInterval(TimeOut) ;
      }
    },)
    return(
        <>

            {activePage==1 &&
                <div className='flex justify-center items-center flex-col mt-40 mb-6'>
                <h1 className='text-red-500 text-5xl font-extrabold mb-3'>Eyni şəkili tap oyununa xoş gəlmisiniz</h1>
                <input onClick={() => setsingleoroposite("singleGame")}
                       className={`buttonstoGame border-2 my-2 py-1 px-4 rounded-xl border-neutral-900 bg-yellow-500 cursor-pointer ${singleoroposite ==="singleGame" ? "bg-green-500" : ""}`}
                       type="button" value="Single Game"/>
                <input onClick={() => setsingleoroposite("opositGame")}
                       className={`buttonstoGame border-2 my-2 py-1 px-4 rounded-xl border-neutral-900 bg-yellow-500 cursor-pointer ${singleoroposite ==="opositGame" ? "bg-green-500" : ""}`}
                       type="button" value="Man to Man"/>

            </div>}
        {
            singleoroposite==="singleGame" ?

            (activePage===1 ?
            <StartNewGame
            difficultOfGame={difficultOfGame}
            setDifficultOfGame={setDifficultOfGame}
            setActivePage={setActivePage}
            setLetsStart={setLetsStart}
            letsStart={letsStart}
            setGameTime={setGameTime}
              />  :

            activePage===2 ?
            
            <Game letsStart={letsStart} 
            HandleClicktoActive={HandleClicktoActive} 
            cards={cards} activeCard={activeCard} 
            matched={matched} 
            difficultOfGame={difficultOfGame}
            time={time}
            setTime={setTime}
            />
            : activePage===3 ?
            <YouWon setActivePage={setActivePage}/> :

            <YouLose setActivePage={setActivePage} />) : singleoroposite==="opositGame" ?

            <SingleorOpositeGame
                firstplayer={firstplayer}
                setfirstplayer={setfirstplayer}
                firstplayerscore={firstplayerscore}
                setfirstplayerscore={setfirstplayerscore}
                secondplayer={secondplayer}
                setsecondplayer={setsecondplayer}
                secondplayerscore={secondplayerscore}
                setsecondplayerscore={setsecondplayerscore}
                setActivePage={setActivePage}
                setsingleoroposite={setsingleoroposite}
            /> : singleoroposite==="startMantoMan" ?
            <ManToMan_Start letsStart={letsStart}
                            HandleClicktoActiveManToMan={HandleClicktoActiveManToMan}
                            firstplayer={firstplayer} setfirstplayer={setfirstplayer}
                            firstplayerscore={firstplayerscore}
                            setfirstplayerscore={setfirstplayerscore}
                            secondplayer={secondplayer}
                            setsecondplayer={setsecondplayer}
                            secondplayerscore={secondplayerscore}
                            setsecondplayerscore={setsecondplayerscore}
                            cards={cards}
                            activeCard={activeCard}
                            matched={matched}
                            Player={Player}
                            setPlayer={setPlayer}
            /> : singleoroposite==="WhoWon" ?
            <WhoWon firstplayer={firstplayer}
                    firstplayerscore={firstplayerscore}
                    secondplayer={secondplayer}
                    secondplayerscore={secondplayerscore}
            /> : null

        }
           
        </>
    )
}

export default App