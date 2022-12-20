/**
 * ************************************
 *
 * StartVote
 * 
 * The button to start the vote after each discussion for each round
 *
 * ************************************
 */

import React from 'react';


//the button will be disabled until 10 votes are in
//after 10 votes are in, game prompts will start again, start voting button will be enable
let votingTime = false;
const StartVoting = props => {
    
    //after clicked start voting, all players voting buttons will be enabled
    function afterClicked (e){
        e.currentTarget.disabled = true;
        const buttons = document.getElementsByClassName("player");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled=false;
        }
        
    }

    //the button should only be enabled during certain gameStatus

    return(
        <div className='gameNav'>
            <button name='startVoting' disabled={props.gameStatus !== 'start'} onClick={afterClicked}>Start Voting</button>
        </div>
    );
}


export default StartVoting;