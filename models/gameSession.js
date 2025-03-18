const { Schema, model } = require('mongoose');

const GameSessionSchema = new Schema({
    gameMaster: String,
    players: [String],
    question: String,
    answer: String,
    scores: { type: Map, of: Number },
    isActive: Boolean,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('GameSession', GameSessionSchema);