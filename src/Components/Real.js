import './index.css';
import Pictures from "./Pictures";
import {useState} from "react";
import {shuffle} from 'lodash';



function App() {
    const [cards,setCard] = useState(shuffle([...Pictures,...Pictures]));
    const [activeCard,setActiveCard] = useState([]);
    const [matched,setMatched] = useState([])

    const HandleClicktoActive = (index)=>{
        
        if (activeCard.length === 0) {
            setActiveCard([index])
        }
        if (activeCard.length === 1) {
            setActiveCard([...activeCard,index])

            const FirsCard      = activeCard[0]
            const SecondCard    = index

            if (cards[FirsCard]===cards[SecondCard]) {
                setMatched([...matched,FirsCard,SecondCard])
            }
        }
        if (activeCard.length === 2) {
            setActiveCard([index])          
        }
    }


    return(
        <div>
            <div className="board">
                {cards.map((card,index) => ( 
                    <div onClick={()=>HandleClicktoActive(index)} key={index} className= {`card-outer ${activeCard.indexOf(index)!== -1 || matched.indexOf(index)!== -1 ? 'active' : ''}`}  >
                        <div className="card">
                            <div className="front"><img src={card} alt=""/></div>
                            <div className="back"></div>
                        </div>
                    </div>
                        
    ))}
            </div>
        </div>
    )
}

export default App



<div>
{firstPage ? 
    <StartNewGame
    difficultOfGame={difficultOfGame}
    setDifficultOfGame={setDifficultOfGame}
    setFirstPage={setFirstPage}
    setLetsStart={setLetsStart}
    letsStart={letsStart}
    setGameTime={setGameTime}
      /> : 
    <Game letsStart={letsStart} 
    HandleClicktoActive={HandleClicktoActive} 
    cards={cards} activeCard={activeCard} 
    matched={matched} 
    difficultOfGame={difficultOfGame}
    time={time}
    setTime={setTime}
    />}
   
</div>