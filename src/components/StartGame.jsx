/**
 * ************************************
 *
 * StartGame
 * 
 * The button to start the game after the 10player joined the game
 * 
 * The button will trigger a get reqeuest to the database for
 * 
 * players' identity, players status
 *
 * Merging into playerCreator component
 * ************************************
 */

import React, {useEffect, userEffect, useState} from 'react';

// this button will only work after the 10th player joine the game
// this button will stop working once clicked
let werewolfPrompts = [
    <h4></h4>,
    <h4>It's night time, all players please close your eyes</h4>,
    <h4>Werewolves, open your eyes</h4>,
    <h4>Werewolves, pick someone to kill</h4>,
    <h4>Werewolves, pick someone to kill</h4>,
    <h4>Werewolves, pick someone to kill</h4>,
    <h4>Werewolves, pick someone to kill</h4>,
    <h4>Werewolves, pick someone to kill</h4>,
    <h4>Werewolves, close your eyes now</h4>
]

let seerPrompts =[
    <h4></h4>,
    <h4>Seer, open your eyes.</h4>,
    <h4>Seer, pick someone to ask about.</h4>,
    <h4>vote to check, get the result back</h4>,
    <h4>Seer, close your eyes</h4>,
]


const StartGame = props => {
    let [currentWolfPrompt, setWolfPrompt] = useState(0)
    let [currentSeerPrompt, setSeerPrompt] = useState(0)

    function incrementPrompt () {
        if(props.gameStatus === 'start' && currentWolfPrompt < 10){
            setWolfPrompt((currentWolfPrompt) => currentWolfPrompt + 1)
            console.log('currentWolfPrompt', currentWolfPrompt);
            if(currentWolfPrompt === 7){

            }
        }
        //if wolves finished voting
        if(props.gameStatus === 'seer'){
            setSeerPrompt((currentSeerPrompt) => currentSeerPrompt + 1);
            console.log('currentSeerPrompt', currentSeerPrompt);
        }
    }

    useEffect(()=>{
        const myInterval = setInterval(()=>{
            incrementPrompt()
        }, 2000);
        return () => clearInterval(myInterval);
        //props here trigger useEffect each time there is a change
    }, [props.gameStatus]);

    function startGame(e){
        console.log('playerlist length',props.playerList.length);
        if(props.playerList.length === 10){
            props.startGame('start');
        }
    }

    function Doctor(){
        //if Seer finished checking
            // "Doctor, open your eyes."
            // "Do you want to save the player who died?"
            // "Doctor, close your eyes"
    }

    function Openeyes(){
        // if Doctor finished choosing
            // "Everybody open your eyes"
            // "it’s daytime. And you have been torn apart by werewolves."
            // change the player card to dead
    }

    return (
        <div className="startGame">
            {werewolfPrompts[currentWolfPrompt]}
            {seerPrompts[currentSeerPrompt]}
            <button name='start' onClick={startGame} disabled={props.playerList.length !==10}>Start Game</button>
        </div>
    );
}

export default StartGame;