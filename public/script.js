const socket = io('http://localhost:3000');
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        socket.emit('submitGuess', { sessionId: '123', player: 'Player1', guess: message });
        messageInput.value = '';
    }
});

socket.on('gameEnded', ({ winner, answer, scores }) => {
    chatBox.innerHTML += `<p><strong>Game Over! Winner: ${winner}. Answer: ${answer}</strong></p>`;
});
