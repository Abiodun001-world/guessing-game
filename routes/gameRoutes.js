const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.post('/create', gameController.CreateGame);

router.get('/:sessionId', gameController.SessionId);

module.exports = router;
 
