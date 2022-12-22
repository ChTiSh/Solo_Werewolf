/**
 * ************************************
 *
 * @module  userController
 * @author
 * @date
 * @description create new user and get all user and voting data
 *
 * ************************************
 */

//link the werewolfModels
const db = require('../models/werewolfModels');
const userController = {};

/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/



/**
* addPlayer - create and save a new User into the database.
*/

userController.addPlayer = async(req, res, next) => {
    const {player_id, name, cookie_id, life_status, game_id} = req.body;
    console.log(req.body);
    try {

        
        //playerId, name, cookie/session, identity, life_status, game_id
        //const addPlayer = "INSERT INTO player(player_id, name, cookie_id, life_status, game_id) VALUES (5, 'a', 123, 'live', 10000) RETURNING *;"
        //, 
        const addPlayer = 'INSERT INTO player(player_id,name, cookie_id, life_status, game_id) VALUES($1, $2, $3, $4,$5) RETURNING *;'
        const values = [player_id, name, cookie_id, life_status, game_id];

        const results = await db.query(addPlayer, values);
        //console.log(results);
        res.locals.getAddPlayer = results.rows[0];
        console.log('getPlayer local', res.locals.getAddPlayer);
        console.log('im here');
        return next();
    }catch(err){
        const playerError = {
            log: `userController.addPlayer: ERROR: ${err}`,
            message: 'Error in userController.addPlayer'
        };
        return next(playerError);
    }
}

/***
 * addVotes - add player's vote - votes table, voter_id primary key, day_night, 
 * gameRounds, vote(playerId)
 */
userController.addVotes = async(req, res, next) => {
    try {
        const addVotes = 'INSERT INTO votes() VALUES(); RETURNING *';
        const values = [];

        const results = await db.query(addVotes, values);
        res.locals.getAddVotes = results.rows[0];
        console.log('getVotes local', res.locals.getAddVotes);
        return next();

    }catch(err){
        const voteError = {
            log: `userController.addVotes: ERROR: ${err}`,
            message: 'Error in userController.addVotes'
        };
        return next(voteError);
    }
}

/**
* getVotes - sum votes with identity filters, if no votes, no one died
* 
*/

module.exports = userController;