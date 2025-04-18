const mongoose = require('mongoose');

const GameSessionSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    gameMaster: String,
    players: String,
    question: String,
    answer: String,
    scores: { type: Map, of: Number },
    isActive: Boolean,
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('GameSession', GameSessionSchema);