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

//start voting button should work after each round's prompt
const startVoting = props => {
    if(props.newRound === true){
        startVoting = true;
    } else {
        startVoting = false;
    }
}

//the button will be disabled until 10 votes are in
//after 10 votes are in, game prompts will start again, start voting button will be enable

const StartVoting = props => (
    <div className='gameNav'>
        <button name='startGame' disabled={startVoting ? false : true} onClick={e =>{e.currentTarget.disabled = true;}}>Start Voting</button>
    </div>
);


export default StartVoting;