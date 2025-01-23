import { useState } from "react"
export default function Player({name,symbol,isActive,onChangeName}){
    const [isEditing,setIsEditing]=useState(false);
    const [playerName,setPlayerName]=useState(name);
    function handleEditClick(){
        setIsEditing((editing)=> !editing)
        if(isEditing){
        onChangeName(symbol,playerName);
        }
    }
    function handleChange(event){
        setPlayerName(event.target.value);
    }
    return (
        <>
            <li className={isActive? 'active': undefined}>
                <span className="player">
                    {!isEditing ? 
                        
                            <span className="player-name">{playerName}</span> 
                            
                        
                     :  <input type="text" required value={playerName} onChange={handleChange}/>
                          
                     }
                    <span className="player-symbol">{symbol}</span>
                    
                    <button onClick={handleEditClick}>{isEditing? 'Save': 'Edit'}</button>
                </span>
                
            </li>
        </>
    );
}