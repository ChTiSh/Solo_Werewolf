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
//import background from '../assets/background.jpg';


// this button will only work after the 10th player joine the game
// this button will stop working once clicked
let werewolfPrompts = [
    <h3></h3>,
    <h3>It's night time, all players please close your eyes...</h3>,
    <h3>Werewolves, open your eyes</h3>,
    <h3>Werewolves, pick someone to kill...</h3>,
    <h3>Werewolves, pick someone to kill...</h3>,
    <h3>Werewolves, pick someone to kill...</h3>,
    <h3>Werewolves, close your eyes now</h3>,
    <h3>Werewolves, close your eyes now</h3>
]

let seerPrompts =[
    <h3></h3>,
    <h3>Seer, open your eyes.</h3>,
    <h3>Seer, pick someone to ask about.</h3>,
    <h3>Seer, pick someone to ask about.</h3>,
    <h3>Seer, pick someone to ask about.</h3>,
    <h3>Seer, close your eyes</h3>,
]

let doctorPrompts = [
    <h3></h3>,
    <h3>Doctor, open your eyes</h3>,
    <h3>the below player died just now</h3>,
    <h3>the below player died just now</h3>,
    <h3>Do you want to save this player?</h3>,
    <h3>Do you want to save this player?</h3>,
    <h3>If yes, click on the name</h3>,
]

let dayPrompts = [
    <h3></h3>,
    <h3>All players, open your eyes</h3>,
    <h3>One player got attacked yesterday night</h3>,
    <h3>Please discuss who could be the attacker</h3>,
    <h3>Please discuss who could be the attacker</h3>,
    <h3>Please discuss who could be the attacker</h3>,
    <h3>Players, please vote</h3>,
    <h3>Players, please vote</h3>,
    <h3>Players, please vote</h3>,
    <h3>Players, please vote</h3>,
]


const StartGame = props => {
    let [currentWolfPrompt, setWolfPrompt] = useState(0);
    let [currentSeerPrompt, setSeerPrompt] = useState(0);
    let [currentDoctorPrompt, setDoctorPrompt] = useState(0);
    let [currentDayPrompt, setDayPrompt] = useState(0);
    let [backgroundColor, setBGColor] = useState('black');

    function incrementPrompt () {
        if(props.gameStatus === 'start' && currentWolfPrompt < 10){
            setWolfPrompt((currentWolfPrompt) => currentWolfPrompt + 1)
            console.log('currentWolfPrompt', currentWolfPrompt);
            const wolves = document.getElementsByName('wolf');
            for (let i = 0; i < wolves.length; i++) {
                wolves[i].style.color = 'white';
            }
            document.body.style.background = backgroundColor;
            // let body = document.getElementsByTagName('body')[0];
            // body.style.backgroundImage = `url(${background})` ;
            // document.body.style.backgroundImage = "url(../assets/background.jpg)";
        }
        //if wolves finished voting
        if(props.gameStatus === 'seer'){
            setSeerPrompt((currentSeerPrompt) => currentSeerPrompt + 1);
            document.getElementById('wolfPrompts').style.visibility = "hidden";
            const buttons = document.getElementsByClassName("player");
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled=props.voteStatus;
            }

            const voteCounts = document.getElementsByClassName("voteCount");
            for (let i = 0; i < voteCounts.length; i++) {
                voteCounts[i].style.visibility = 'hidden'; 
            }
        }

        if(props.gameStatus === 'doctor'){
            setDoctorPrompt((currentDoctorPrompt) => currentDoctorPrompt + 1);
            document.getElementById('seerPrompts').style.visibility = "hidden";
            let player = document.getElementsByClassName('playerBox');
            setTimeout(()=>{
                player[props.lastPlayerAttacked].style.backgroundColor = 'white';
            }, 1500);
            //document.getElementById('1').disabled = false;
            document.getElementById('endV').disabled = false;
            setTimeout(()=>{
                
            },2000)
            setBGColor('white');
        }

        if(props.gameStatus ==='day'){
            setBGColor('white');
            document.body.style.background = backgroundColor;
            document.getElementById('doctorPrompts').style.visibility = "hidden";
            setDayPrompt((currentDayPrompt) => currentDayPrompt + 1);
            //document.getElementById('endV').disabled = false;
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
            props.changeStatus('start');
            document.getElementById('startGame').style.visibility = "hidden";
            document.getElementById('startV').style.visibility = 'visible';
            document.getElementById('endV').style.visibility = 'visible';
        }
        props.startVoting(false);


        //generate a gameId and post it to the database
    }


    function Openeyes(){
        // if Doctor finished choosing
            // "Everybody open your eyes"
            // "it’s daytime. And you have been torn apart by werewolves."
            // change the player card to dead
    }

    return (
        <div className="startGame">
            <div className='nightPrompts' id='wolfPrompts'>{werewolfPrompts[currentWolfPrompt]}</div>
            <div className='nightPrompts' id='seerPrompts'>{seerPrompts[currentSeerPrompt]}</div>
            <div className='nightPrompts' id='doctorPrompts'>{doctorPrompts[currentDoctorPrompt]}</div>
            <div className='dayPrompts' id='dayPrompts'>{dayPrompts[currentDayPrompt]}</div>
            <button name='start' id='startGame' onClick={startGame} disabled={props.playerList.length !==10}>Start Game</button>
        </div>
    );
}

export default StartGame;