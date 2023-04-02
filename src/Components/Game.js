




function Game({HandleClicktoActive,cards,activeCard,matched,letsStart,time}) {
    
    



    return(
        <div>
            <div className='welcome text-4xl text-center mb-4 font-bold text-green-800'>Hörmətli {letsStart}  oyun başladı</div>
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
                <div>Qalan vaxtınız {time} saniyə</div>        
        </div>
    )
}

export default Game