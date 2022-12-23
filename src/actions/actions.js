/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes';

// add or delete player from the game through player ID
export const addPlayerActionCreator = playerName => ({
  type: types.ADD_PLAYER,
  payload: playerName,
});


export const attackedPlayerActionCreator = playerId => ({
  type: types.ATTACKED_PLAYER,
  payload: playerId,
});

export const addVotesActionCreator = playerId => ({
  type: types.ADD_VOTES,
  payload: playerId,
});

export const startGameActionCreator = gameStatus => ({
  type: types.START_GAME,
  payload: gameStatus,
});

export const startVotingActionCreator = voteStatus => ({
  type: types.START_VOTING,
  payload: voteStatus,
});

export const changeStatusActionCreator = gameStatus => ({
  type: types.CHANGE_STATUS,
  payload: gameStatus,
});