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


import React, {useEffect} from 'react';

 //display player No. ,player name

 //time feature is option with next buttons as well
 //<button name='next' onClick={e => {props.restartTimer(e.target.name)}}>Next</button>
 const Player = props => {
    // to check the player status and game status
    function enableVoting(){
        if(props.gameStatus === 'start'){
            //select all the buttons with wolf identity and enable them
            const buttons = document.getElementsByClassName("wolf");
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled=false;
            }
        }
    }

    function afterVote(e){
        //disable the button after voting
        e.currentTarget.disabled = true;
        //send the vote out
        props.addVotes(e.target.playerId)
    }

    //userEffect
    return (
        <div className="playerBox">
            <h4>Player No. : {props.player.playerId + 1}</h4>
            <h4>{props.player.playerIdentity}</h4>
            <button playerid={props.player.playerId} className={props.player.playerIdentity} disabled={enableVoting} onClick ={afterVote}>{props.player.name}</button>
        </div>

    );
}
 export default Player;