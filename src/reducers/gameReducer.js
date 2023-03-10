/**
 * ************************************
 *
 * @module  gameReducer
 * @author Chen S.
 * @date 2022.12.15
 * @description reducer for in game data
 *
 * ************************************
 */

import * as types from "../constants/actionTypes";

//import * as types from '';

const initialState = {
    totalPlayers: 0,
    totalWolves: [],
    totalHumans: [],
    gameRounds: 0,
    totalVotes: 0,
    seerSkill: false,
    doctorSkill: false,
    hunterSkill: false,
    playerList: [],
    playerId: 0,
    playerName: '',
    gameId: Math.floor(Math.random() * 1000000000000),
    gameStatus: '',
    voteStatus: true,
    playerIdentityList:['wolf','wolf','wolf','villager', 'villager', 'villager','villager','doctor','seer','hunter'],
    playerIdentity:'',
    lastPlayerAttacked: 0,
}

const gameReducer = (state = initialState, action) => {
    //playerList should include, player name, player status, player identity
    let playerList;

    switch(action.type){
        case types.ADD_PLAYER:{
            const playerId = state.playerId + 1;
            const totalPlayers = state.totalPlayers + 1;
            const playerName = action.payload;
            //picking one random no based on how many identity left in the last
            const randomNum= Math.floor(Math.random() * state.playerIdentityList.length);

            //randomly assign one identity to the player
            const playerChar = state.playerIdentityList[randomNum];
            console.log('playerIdentity', playerChar)
            console.log('reducer addplayer payload', action.payload);
            console.log('randomNo', randomNum);
            //console.log('playerIdentityList', state.playerIdentityList.splice(randomNum,1));
            console.log('playerIdentityList', state.playerIdentityList);


            // add the new player to player list
            const newPlayer = {
                playerId: state.playerId,
                name: action.payload,
                playerIdentity:playerChar,

            }
            //make a copy
            let playerIdentityListDeleted = state.playerIdentityList.slice();
            //remove from the list
            playerIdentityListDeleted.splice(randomNum,1);
            console.log('playerIdentityListDeleted', playerIdentityListDeleted)
            
            //make a copy
            playerList = state.playerList.slice();
            //add to the list
            playerList.push(newPlayer);

            //check the player identity and add to the total number accordingly
            let totalWolves = state.totalWolves.slice();
            if(playerChar ==='wolf'){
                totalWolves.push(newPlayer);
                console.log('total wolves', totalWolves)
            }

            let totalHumans = state.totalHumans.slice();
            if(playerChar ==='villager' || playerChar ==='seer' || 
               playerChar ==='hunter' || playerChar ==='doctor' ){
                totalHumans.push(newPlayer);
            }

            // const body = {
            //     player_id: 0,
            //     name: document.getElementById('name').value, 
            //     cookie_id: 'testingwithname',
            //     life_status: "live",
            //     game_id: 10000,
            // }
            // //fetch post cookie data into database
           
            // fetch('http://localhost:3000/api/player', {
            //     method: 'POST',
            //     //mode:'no-cors',
            //     headers: {'Content-Type': 'Application/JSON'},
            //     body: JSON.stringify(body),
            // })
            // .then(res => res.json())
            // .then((data) => {
            //     console.log(data);
            // })
            // .catch(err => console.log('Addplayer fetch /: ERROR: ', err));

            return {
                ...state,
                playerList,
                playerId,
                totalHumans,
                totalWolves,
                totalPlayers,
                playerName,
                playerIdentity:'',
                playerIdentityList:playerIdentityListDeleted,
            };
        }

        case types.ADD_VOTES:{
            let totalVotes = state.totalVotes+1;
            //playerId will be received as action payload
            console.log('totalVotes',totalVotes);


            return {
                ...state,
                totalVotes,
            };
        }

    

        case types.START_VOTING: {
            let voteStatus = action.payload;
            console.log("voteStatus", voteStatus);
            return {
                ...state,
                voteStatus
            }
        }

        case types.CHANGE_STATUS:{
            let gameStatus = action.payload;
            console.log('gameStatus changed to', gameStatus)
            return {
                ...state,
                gameStatus
            }
        }
        case types.ATTACKED_PLAYER:{
            let lastPlayerAttacked = action.payload;
            return {
                ...state,
                lastPlayerAttacked
            };
        }
        default: {
            return state;
        }
    }
}

export default gameReducer;