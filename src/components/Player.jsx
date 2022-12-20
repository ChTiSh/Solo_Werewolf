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

    }

    //userEffect
    return (
        <div className="playerBox">
            <h4>Player No. : {props.player.playerId + 1}</h4>
            <h4>{props.player.playerIdentity}</h4>
            <button name={props.player.playerId} disabled={true} onClick = {e => {props.addVotes(e.target.playerId)}}>{props.player.name}</button>
        </div>

    );
}
 export default Player;