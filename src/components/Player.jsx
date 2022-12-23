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
    //let [visible, setVisible] = useState('hidden');

    function enableVoting(){
        if(props.gameStatus === 'start'){
            //select all the players with wolf identity and enable them to vote
        }
    }

    // function cancel(){
    //     document.getElementById('cancel').style.visibility = visible;
    //     if (count === 0){
    //         setVisible('hidden')
    //     }
    //     if(count > 0){
    //         setVisible('visible')
    //         setCount(count-1);
    //         //delete total votes
    //     }
    // }
  
    function sendVotes(){
        /***
         * "player_id" smallint,
            "game_id" bigint,
            "game_status" varchar NOT NULL,
            "voted_player_id" smallint ,
            "game_rounds" smallint NOT NULL,
            "identity" varchar NOT NULL
         */
        const body ={
            player_id: 0,
            game_id: props.gameId,
            game_status: props.gameStatus,
            voted_player_id: props.player.playerId,
            game_rounds: props.gameRounds,
            identity: props.player.playerIdentity
        }

        fetch('http://localhost:3000/api/votes', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch(err => console.log('Sendvotes fetch /: ERROR: ', err));

    }
    
    function afterVote(e){
        console.log('voting');
        console.log(props.playerList);
        setCount(count+ 1);
        console.log('count', count);
        //send the vote out
        props.addVotes(document.getElementsByClassName('player').id)
        //console.log(document.getElementsByClassName('player').id)
        
        sendVotes();
        //disable the button after voting
        if(props.totalVotes === 3 && props.gameStatus === 'start'){
            props.startVoting(true);
        }np
        console.log('prop.gamestatus after each click', props.gameStatus);
        console.log(props.totalVotes)
        
        //document.getElementById(id).style.color = 'red';
        if(props.gameStatus === 'seer'){
            setCount(0);
            let id = e.target.id;
            document.getElementById(id).style.color = 'red';
         
            console.log('vote status at seer stage', props.voteStatus)
            
            setTimeout(()=>{
                document.getElementById(id).style.visibility = 'hidden';
            }, 1500)
            props.changeStatus('doctor')
        }

        if(props.gameStatus ==='doctor'){
            let player = document.getElementsByClassName('playerBox');
            player[1].style.backgroundColor = 'lightslategray';
            props.changeStatus('day');
            //props.startVoting(false);
        }

        if(props.gameStatus === 'day'){
            document.body.style.background = 'white';
        }
    }
    
    //userEffect
    return (
        <div className="playerBox">
            <h4 className='voteCount'>{count}</h4>
            <h4>Player No. : {props.player.playerId + 1}</h4>
            <h4 className='identity' id={props.player.playerId} name={props.player.playerIdentity}>{props.player.playerIdentity}</h4>
            <button id={props.player.playerId} className="player" disabled={props.voteStatus} onClick={afterVote}>{props.player.name}</button>
            
        </div>

    );
}
 export default Player;


 // if(props.gameStatus === 'doctor'){
        //     props.changeStatus('day')
        // }
        //fetch database, 
        //console.log('player Identity at player creator', props.playerIdentity);
        //setIdentity(props.playerIdentity);
        //const [identity, setIdentity] = useState('');

        //<button id='cancel' style={{visibility:'hidden'}} onClick={cancel}>Cancel</button>
        //document.getElementById('cancel').style.visibility = "visible";