const db = require('../models/werewolfModels');

const sessionController = {};

/**
* isLoggedIn - find the appropriate session for this request in the database, then
* verify whether or not the session is still valid.
*/
sessionController.isLoggedIn = (req, res, next) => {
  // write code here
  
};

/**
* startSession - create and save a new Session into the database.
*/
sessionController.startSession = (req, res, next) => {
  //write code here
  
};

sessionController.getGameProgress= (req, res, next) => {
  // write code here
  // console.log('triggering');
  db.query('SELECT p.*, s.name AS Species, pl.name AS Homeworld FROM species s INNER JOIN people p ON s._id = p.species_id INNER JOIN planets pl ON pl._id= p.homeworld_id;')
    .then(data=> {
      res.locals.characters = data.rows;
      return next();
    })
    .catch((err) => {
      const charError = {
        log: `starWarsController.getCharacters: ERROR: ${err}`,
        message: 'Error in starWarsController.getCharacters'
      };
      return next(charError);
    });
  // next();
};

// **** logic to add new player to the game ****
sessionController.addCharacter = async(req, res, next) => {
  // write code here
  // const { name, gender, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld, homeworld_id} = req.body;
  // console.log(req.body);
  // try{
  //   const addCharacter = 'INSERT INTO people(name, gender, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10); RETURNING *';
  //   const values = [name, gender,species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld_id];

  //   const results = await db.query(addCharacter, values);
    
  //   res.locals.getaddCharacter = results.rows[0];
  //   console.log('getChar local', res.locals.getaddCharacter);
  //   return next();
  // }catch(err){
  //   const charError = {
  //     log: `starWarsController.getaddCharacter: ERROR: ${err}`,
  //     message: 'Error in starWarsController.getaddCharacter'
  //   };
  //   return next(charError);
  // }
};

// **** logic to change player alive status to false ****
sessionController.removeCharacter = async(req, res, next) => {


  // write code here
  // const { name, gender, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld, homeworld_id} = req.body;
  // console.log(req.body);
  // try{
  //   const addCharacter = 'INSERT INTO people(name, gender, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10); RETURNING *';
  //   const values = [name, gender,species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld_id];

  //   const results = await db.query(addCharacter, values);
    
  //   res.locals.getaddCharacter = results.rows[0];
  //   console.log('getChar local', res.locals.getaddCharacter);
  //   return next();
  // }catch(err){
  //   const charError = {
  //     log: `starWarsController.getaddCharacter: ERROR: ${err}`,
  //     message: 'Error in starWarsController.getaddCharacter'
  //   };
  //   return next(charError);
  // }
};

module.exports = sessionController;
