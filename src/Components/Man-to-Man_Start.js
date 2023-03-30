


function ManToMan_Start ({firstplayer,setfirstplayer,firstplayerscore,setfirstplayerscore,secondplayer,setsecondplayer,
                         secondplayerscore,setsecondplayerscore,HandleClicktoActiveManToMan,HandleClicktoActive,cards,activeCard,matched,Player,
                             }){
    return(
        <>
            <div className="flex justify-around mb-5">
                <div>
                    <div className={`text-5xl text-center mb-4 font-bold ${Player ? "text-green-800" : "text-red-800"}`}>{firstplayer}</div>
                    <div className="text-4xl font-bold text-center">{firstplayerscore}</div>
                </div>
                <img className="w-20 h-20" src="https://cdn-icons-png.flaticon.com/512/8989/8989489.png" alt=""/>
                <div>
                    <div className={`text-5xl text-center mb-4 font-bold ${Player ? "text-red-800" : "text-green-800"}`}>{secondplayer}</div>
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