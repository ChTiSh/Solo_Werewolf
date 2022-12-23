const express = require('express');

const userController = require('./controllers/userController.js');

const router = express.Router();


router.get('/votes',
  userController.getVotes,
  (req, res) => res.status(200).json(res.locals.votes[0].voted_player_id)
);

router.post('/votes',
  userController.addVotes,
  (req, res) => res.status(200).json(res.locals.addVotes)
);

router.get('/player',
  //userController.getAllPlayers,
  (req, res) => res.status(200).json(res.locals.players)
);

router.post('/player',
  userController.addPlayer,
  (req, res) => res.status(200).json(res.locals.getAddPlayer)
);


//only update the life status 
router.patch('/:id',
  //userController.killPlayer,
  (req, res) => res.status(200).json(res.locals.getKilledPlayer)
);

module.exports = router;