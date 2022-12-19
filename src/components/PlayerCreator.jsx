/**
 * ************************************
 *
 * @module  PlayerCreator
 * @author
 * @date
 * @description presentation component that takes user input for new player creation
 *
 * ************************************
 * 
 *  how do we create the circuit between the store and an input field?
 *  how do we update the store from a presentation component?
 * 
 *  market data: key: Name, values: identity, life, skill
 * 
 */
import React from 'react';


let disable = false;
const PlayerCreator = props => {
    
    
    let display;
    const enoughPlayer = ()=>{
        console.log('playList length', props.playerList.length);
        if(props.playerList.length >= 9){
           disable = true;
        } 
        console.log(disable);
    }

    // after each click of join, a post request should be sent to the server 
    // to generate the session id/cookie to identify each player
    function handleClick() {
        props.addPlayer(document.getElementById('name').value);
        enoughPlayer();
    }
  
    
    return (
        <div className="gameNav">
            <div className="nameInput">
                <input id='name' ></input>
                <button onClick ={handleClick} disabled={disable? true : false}>Join</button>
            </div>

        </div>
    )
}

export default PlayerCreator;

//<button onClick ={() => props.addPlayer(document.getElementById('name').value)} disabled={disable}>Join</button>
