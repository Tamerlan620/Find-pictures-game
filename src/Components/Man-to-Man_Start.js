


function ManToMan_Start ({firstplayer,setfirstplayer,firstplayerscore,setfirstplayerscore,secondplayer,setsecondplayer,
                         secondplayerscore,setsecondplayerscore,HandleClicktoActiveManToMan,HandleClicktoActive,cards,activeCard,matched,Player,
                             }){
    return(
        <>
            <div className="mantomanstart flex justify-around mb-5">
                <div className="players w-1/3">
                    <div className={`text-3xl sm:text-5xl text-center mb-4 font-bold ${Player ? "text-green-800 ActivePlayer" : "text-red-800 PassivePlayer"}`}>{firstplayer}</div>
                    <div className="text-4xl font-bold text-center">{firstplayerscore}</div>
                </div>
                <img className="playersimg w-20 h-20 m-auto w-1/3" src="https://cdn-icons-png.flaticon.com/512/8989/8989489.png" alt=""/>
                <div className="players md:w-1/3">
                    <div className={`text-3xl sm:text-5xl text-center mb-4 font-bold ${Player ? "text-red-800 PassivePlayer" : "text-green-800 ActivePlayer"}`}>{secondplayer}</div>
                    <div className="text-4xl font-bold text-center">{secondplayerscore}</div>
                </div>
            </div>
            <div className="board">
                {cards.map((card,index) => (
                    <div onClick={()=>HandleClicktoActiveManToMan(index)} key={index} className= {`card-outer ${activeCard.indexOf(index)!== -1 || matched.indexOf(index)!== -1 ? 'active' : ''}`}  >
                        <div className="card">
                            <div className="front"><img src={card} alt=""/></div>
                            <div className="back"></div>
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}

export default ManToMan_Start