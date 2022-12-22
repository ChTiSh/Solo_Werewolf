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
import { useStore } from 'react-redux';


 //display player No. ,player name

 //time feature is option with next buttons as well
 //<button name='next' onClick={e => {props.restartTimer(e.target.name)}}>Next</button>
 const Player = props => {
    // to check the player status and game status
    //let [disable, setDisable] = useState(false);
    let [count, setCount] = useState(0);

    function enableVoting(){
        if(props.gameStatus === 'start'){
            //select all the players with wolf identity and enable them to vote
            
        }
    }
  

    
    function afterVote(e){
        console.log('voting');
        console.log(props.playerList);
        setCount(count+ 1);
        console.log('count', count);
        //send the vote out
        props.addVotes(document.getElementsByClassName('player').id)
        //disable the button after voting
        props.startVoting(false);
             
        //if total votes are equal to the current player numbers, game status wil be changed to start again
        if(props.totalVotes >= props.playerList.length){
            props.gameStatus = 'start';
        }
        
        //fetch database, 
        //console.log('player Identity at player creator', props.playerIdentity);
        //setIdentity(props.playerIdentity);
        //const [identity, setIdentity] = useState('');
    }

    
    
    //userEffect
    return (
        <div className="playerBox">
            <h4 id='voteCount'>{count}</h4>
            <h4>Player No. : {props.player.playerId + 1}</h4>
            <h4 className='identity' id={props.player.playerId}>{props.player.playerIdentity}</h4>
            <button id={props.player.playerId} className="player" disabled={props.voteStatus} onClick={afterVote}>{props.player.name}</button>
        </div>

    );
}
 export default Player;


