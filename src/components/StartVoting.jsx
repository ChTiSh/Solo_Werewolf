/**
 * ************************************
 *
 * StartVote
 * 
 * The button to start the vote after each discussion for each round
 * 
 * Missing Votes, game rounds, day vs night 
 *
 * ************************************
 */

import React from 'react';


//the button will be disabled until 10 votes are in
//after 10 votes are in, game prompts will start again, start voting button will be enable
const StartVoting = props => {

    /**
     * "player_id" smallint NOT NULL PRIMARY KEY,
        "game_id" bigint NOT NULL,
        "game_status" varchar NOT NULL,
        "voted_player_id" smallint NOT NULL,
        "game_rounds" smallint NOT NULL
     */
    
    //after clicked start voting, all players voting buttons will be enabled
    function startVote (e){
        e.currentTarget.disabled = true;
        console.log(props.voteStatus)
        props.startVoting(false);
        const buttons = document.getElementsByClassName("player");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled=props.voteStatus;
        }
    }

    function endVote (e){
        e.currentTarget.disabled = true;
        console.log(props.voteStatus)
        const buttons = document.getElementsByClassName("player");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled=props.voteStatus;
        }

        //change props.gameStatus === 'seer'
        if(props.gameStatus ==='start'){
            console.log(props.gameStatus)
            props.changeStatus('seer');
            props.startVoting(false);
            const wolves = document.getElementsByName('wolf');
            for (let i = 0; i < wolves.length; i++) {
                wolves[i].style.color = 'lightslategray';
            }

            const voteCounts = document.getElementsByClassName("voteCount");
            for (let i = 0; i < voteCounts.length; i++) {
                voteCounts[i].style.color = 'lightslategray'; 
            }
        } else if(props.gameStatus === 'seer'){
            const wolves = document.getElementsByClassName("player");
            for (let i = 0; i < wolves.length; i++) {
                wolves[i].style.color = 'lightslategray';
            }
            props.changeStatus('doctor')
        } else if(props.gameStatus === 'doctor'){
            props.changeStatus('day')
            props.startVoting(true);
            
        } else {
            props.changeStatus('start');
            document.body.style.background = 'white';
            
        }
        
        //after clicking end voting, send out get request to get max votes result
        if(props.gameStatus ==='start'){
            fetch('http://localhost:3000/api/votes')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                props.attackedPlayer(data[0].voted_player_id);
                console.log('fetched data[0].voted_player',data[0].voted_player_id)
            })
            .catch(err => console.log('Sendvotes fetch /: ERROR: ', err));
        }
    }

    //the button should only be enabled during certain gameStatus

    return(
        <div className='gameNav'>
            <button id='startV' name='start' disabled={props.voteStatus !== true} style= {{visibility:'hidden'}} onClick={startVote}>Start Voting</button>
            <div></div>
            <button id='endV' name='end' disabled={props.voteStatus === true} style= {{visibility:'hidden'}}onClick={endVote}>End Voting</button>
        </div>
    );
}


export default StartVoting;