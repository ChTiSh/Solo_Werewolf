/**
 * ************************************
 *
 * StartGame
 * 
 * The button to start the game after the 10player joined the game
 *
 * ************************************
 */

import React from 'react';

// this button will only work after the 10th player joine the game
// this button will stop working once clicked

const missingPlayers = props => {
    if(props.playerList.length === 10){
        missingPlayers = false;
    } else {
        missingPlayers = true;
    }
}
const StartGame = props => (
    <div className="gameNav">
        <button name='startGame' disabled={missingPlayers? true : false} onClick={e =>{e.currentTarget.disabled = true;}}>Start Game</button>
    </div>
);


export default StartGame;