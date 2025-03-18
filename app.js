const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');
const cors = require('cors');
const gameRoutes = require('./routes/gameRoutes');
const gameSocket = require('./socket/gameSocket');
 const db = require('./db/mongodb');

db.connectToMongoDB(); // Connect to MongoDB

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});



app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(express.json());

//Routes
 app.use('/api/game', gameRoutes);


gameSocket(io);

server.listen(3000, () => console.log('Server running on port 3000'));

