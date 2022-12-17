const { Pool } = require('pg');

const PG_URI = 'postgres://dkeunusv:hR4mynIzbFgNhJvPmpaw8TmH8_t8b3L0@ruby.db.elephantsql.com/dkeunusv';

const pool = new Pool ({
    connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};

/**
 * data structure - to be stored in database
 * 
 * Table 1 - player ID, name, player status, player identity, game ID, vote, round, day_night, save, hunt <= redux
 * 
 * 
 * other in game data that would be valuable 
 * 
 * votes - to start the game, to vote people out
 * 
 * turns to talk - can be boolean - true/false
 * 
 * rounds - use to record
 */