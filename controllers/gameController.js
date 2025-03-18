const GameSession = require('../models/GameSession');

const CreateGame = async (req, res) => {
    const { gameMaster } = req.body;
    let session = new GameSession({
        gameMaster,
        players: [gameMaster],
        scores: {},
        isActive: false
    });
    await session.save();
    res.json(session);
};

const SessionId = async (req, res) => {
    let session = await GameSession.findById(req.params.sessionId);
    res.json(session);
};

module.exports = {
   CreateGame,
   SessionId
}