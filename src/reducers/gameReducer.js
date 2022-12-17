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
    totalWolves: 0,
    totalHumans: 0,
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
}

const gameReducer = (state = initialState, action) => {
    //playerList should include, player name, player status, player identity
    let playerList;

    switch(action.type){
        case types.ADD_PLAYER:{
            const playerId = state.playerId + 1;
            const totalPlayers = state.totalPlayers + 1;
            const playerName = action.payload;

            const newPlayer = {
                playerId: state.playerId,
                name: action.payload
            }

            playerList = state.playerList.slice();
            playerList.push(newPlayer);

            return {
                ...state,
                playerList,
                playerId,
                totalPlayers,
                playerName,
            };
        }

        case types.ADD_VOTES:{
            let totalVotes = state.totalVotes;

            return {
                ...state,
                playerList,
                totalVotes,
            };
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