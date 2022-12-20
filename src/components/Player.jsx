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

 import React from 'react';

 //display player No. ,player name

 //time feature is option with next buttons as well
 //<button name='next' onClick={e => {props.restartTimer(e.target.name)}}>Next</button>
 const Player = props => (
    <div className="playerBox">
        <h4>Player No. : {props.player.playerId + 1}</h4>
        <h4>{props.player.playerIdentity}</h4>
        <button name={props.player.name} disabled={true} onClick = {e => {props.addVotes(e.target.name)}}>{props.player.name}</button>
    </div>

 );
 export default Player;