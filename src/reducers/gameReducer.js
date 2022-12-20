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
    gameId:10000,
    gameStatus: '',
    playerIdentityList:['wolf','wolf','wolf','villager', 'villager', 'villager','villager','doctor','seer','hunter'],
    playerIdentity:'',
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
                playerList,
                totalVotes,
            };
        }

        case types.START_GAME: {
            let gameStatus = action.payload;
            console.log("gameStatus", gameStatus);
            return {
                ...state,
                gameStatus
            }
        }

        case types.DELETE_PLAYER:{
            let totalPlayers = state.totalPlayers;

            return {
                ...state,
                playerList,
                totalPlayers,
            };
        }
        default: {
            return state;
        }
    }
}

export default gameReducer;