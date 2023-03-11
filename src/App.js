import './index.css';
import Pictures from "./Pictures";
import {useEffect, useState} from "react";
import {shuffle} from 'lodash';
import Game from './Components/Game';
import StartNewGame from './Components/StartNewGame';
import YouWon from './Components/YouWon';
import YouLose from './Components/YouLose';



function App() {
    const [cards,setCard] = useState(shuffle([...Pictures,...Pictures]));
    const [activeCard,setActiveCard] = useState([]);
    const [matched,setMatched] = useState([]);
    const [activePage,setActivePage]= useState(1);
    const [letsStart,setLetsStart] = useState('');
    const [difficultOfGame,setDifficultOfGame] = useState('')
    const [time,setTime] = useState(Number)


    const HandleClicktoActive = (index)=>{
        
        if (activeCard.length === 0) {
            setActiveCard([index])
        }
        if (activeCard.length === 1) {
            if (activeCard[0]!==index) {
                setActiveCard([...activeCard,index])
                const FirsCard      = activeCard[0]
                const SecondCard    = index
                console.log(activeCard[0],index);
                if (cards[FirsCard]===cards[SecondCard]) {
                    setMatched([...matched,FirsCard,SecondCard])
                }
            }
          
            
            
        }
        if (activeCard.length === 2) {
            setActiveCard([index])          
        }
    }

    const setGameTime = ()=>{
        if (difficultOfGame==='Asan') {
            setTime(240)
        }
        if (difficultOfGame==='Orta') {
            setTime(200)
        }
        if (difficultOfGame==='Cetin') {
            setTime(130)
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
        }
          if (matched.length===36){
            setActivePage(3)
            setMatched([])
        }
          return () =>clearInterval(TimeOut) ;

      }
    },[time])
    console.log(activePage)
    return(
        <div>
        {activePage===1 ?
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
            <YouWon setActivePage={setActivePage} /> :
            <YouLose setActivePage={setActivePage} />

        }
           
        </div>
    )
}

export default App