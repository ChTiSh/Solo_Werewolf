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


export const deletePlayerActionCreator = playerId => ({
  type: types.DELETE_PLAYER,
  payload: playerId,
});

export const addVotesActionCreator = playerId => ({
  type: types.ADD_VOTES,
  payload: playerId,
});