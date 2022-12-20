/**
 * ************************************
 *
 * @module  Player
 * @author
 * @date
 * @description presentation component that renders a single box for each player
 *
 * ************************************
 */


import React, { useState, useEffect }  from 'react';


 //display player No. ,player name

 //time feature is option with next buttons as well
 //<button name='next' onClick={e => {props.restartTimer(e.target.name)}}>Next</button>
 const Player = props => {
    // to check the player status and game status
    let [disable, setDisable] = useState(false);

    function enableVoting(){
        if(props.gameStatus === 'start'){
            //select all the players with wolf identity and enable them to vote
            
        }
    }

    function afterVote(e){
        console.log('voting');
        console.log(props.playerList);
        e.currentTarget.disabled = false;
        //send the vote out
        props.addVotes(document.getElementsByClassName('player').id)
        //disable the button after voting        

        //if total votes are equal to the current player numbers, game status wil be changed to start again
        if(props.totalVotes >= props.playerList.length){
            props.gameStatus = 'start';
        }
    }

    
    
    //userEffect
    return (
        <div className="playerBox">
            <h4>Player No. : {props.player.playerId + 1}</h4>
            <h4>{props.player.playerIdentity}</h4>
            <button id={props.player.playerId} className="player" disabled={props.voteStatus} onClick={afterVote}>{props.player.name}</button>
        </div>

    );
}
 export default Player;


