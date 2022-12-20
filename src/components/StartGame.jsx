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
    <h4>It's night time, all players please close your eyes</h4>,
    <h4>Werewolves, open your eyes</h4>,
    <h4>Werewolves, pick someone to kill</h4>,
    <h4>Werewolves, pick someone to kill</h4>,
    <h4>Werewolves, pick someone to kill</h4>,
    <h4>"Werewolves, close your eyes now"</h4>
]


const StartGame = props => {
    let [promptNum, setPrompt] = useState(0)
    
        console.log(promptNum)
        useEffect(()=>{
            //if(props.gameStatus === 'start'){
                const myInterval = setInterval(()=>{
                    setPrompt(promptNum + 1);
                }, 2000);
                return () => clearInterval(myInterval);
           //}
        }, []);
    

    function startGame(e){
        console.log('playerlist length',props.playerList.length);
        if(props.playerList.length === 10){
            props.startGame('start');
        }
    }

    let Narrator = [<h4>Players, welcome to the game</h4>];
    let prompt;
    
    
    const Werewolf =(Narrator)=> {
        //check if the game start, game start true : false
        if(props.gameStatus === 'start'){
            //for loop to go through with setTimeout()
            for(let i = 0; i < werewolfPrompts.length; i++){
                //change the prompt every 2 seconds
                setInterval(() => {
                    prompt = werewolfPrompts[i];
                    console.log('prompt',prompt)
                }, 2000);
            }
        }
        
            // "It's night time, all players please close your eyes"
            // "Werewolves, open your eyes"
            // "Werewolves, pick someone to kill"
            // vote to kill, send the results out
            // "Werewolves, close your eyes"

    }

    function Seer (){
        //if wolves finished voting
            // “Seer, open your eyes.
            // "Seer, pick someone to ask about."
            // vote to check, get the result back
            // "Seer, close your eyes"
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
            <p>{promptNum}</p>
            <button name='start' onClick={startGame}>Start Game</button>
        </div>
    );
}

export default StartGame;