const GameSession = require('../models/GameSession');

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`User connected: ${socket.id}`);

        socket.on('joinSession', async ({ player, sessionId }) => {
            let session = await GameSession.findById(sessionId);
            if (session && !session.isActive && !session.players.includes(player)) {
                session.players.push(player);
                session.scores.set(player, 0);
                await session.save();
                socket.join(sessionId);
                io.to(sessionId).emit('sessionUpdated', session);
            }
        });

        socket.on('startGame', async ({ sessionId }) => {
            let session = await GameSession.findById(sessionId);
            if (session && session.players.length > 2) {
                session.isActive = true;
                await session.save();
                io.to(sessionId).emit('gameStarted', session);
            }
        });

        socket.on('submitGuess', async ({ sessionId, player, guess }) => {
            let session = await GameSession.findById(sessionId);
            if (session && session.isActive) {
                if (guess.toLowerCase() === session.answer.toLowerCase()) {
                    session.scores.set(player, (session.scores.get(player) || 0) + 10);
                    session.isActive = false;
                    await session.save();
                    io.to(sessionId).emit('gameEnded', { winner: player, answer: session.answer, scores: session.scores });
                }
            }
        });

        socket.on('disconnect', () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });
};
