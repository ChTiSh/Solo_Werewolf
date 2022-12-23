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
        const addPlayer = 'INSERT INTO player(player_id,name, cookie_id, life_status, game_id) VALUES($1, $2, $3, $4,$5) RETURNING *;'
        const values = [player_id, name, cookie_id, life_status, game_id];

        const results = await db.query(addPlayer, values);
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
    const {player_id, game_id, game_status, voted_player_id, game_rounds, identity} = req.body;
    console.log(req.body);
    try {
        const addVotes = 'INSERT INTO votes(player_id, game_id, game_status, voted_player_id, game_rounds, identity) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;';
        const values = [player_id, game_id, game_status, voted_player_id, game_rounds, identity];
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

userController.getVotes = (req, res, next) => {
    console.log('fetching for vote counts');
    const maxVotes = 'SELECT \
                    v.voted_player_id\
                    , count(*) as total_votes\
                    FROM\
                        votes AS v\
                    GROUP BY\
                        v.voted_player_id\
                    ORDER BY\
                        total_votes DESC\
                    LIMIT 1;'
    /*  SELECT 
            v.voted_player_id
            , count(*) as total_votes
        FROM
            votes AS v
        GROUP BY
            v.voted_player_id
        ORDER BY
            total_votes DESC
        LIMIT 1
    */
    db.query(maxVotes)
    .then(data=>{
        res.locals.votes = data.rows;
        console.log('res.locals.votes', res.locals.votes)
        return next();
    })
    .catch((err)=>{
        const voteError = {
            log: `userController.getVotes: ERROR: ${err}`,
            message: 'Error in userController.getVotes'
        };
        return next(voteError);
    })


}

module.exports = userController;