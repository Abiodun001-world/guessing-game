# Guessing Game

This is the Altschool Africa (Backend Engineering - Node.js) third semester first assignment.
A real-time multiplayer word guessing game built with Node.js and Socket.IO, featuring a chat-like interface where players take turns creating questions for others to solve.

## 🛠️ Tech Stack

`

- **Backend**: Node.js, Express.js
- **Real-time Communication**: Socket.IO
- **Frontend**: HTML, CSS, JavaScript

## 📋 Prerequisites

- Node.js (v20 recommended)
- npm or yarn

## ⚙️ Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/Abiodun001-world/guessing-game.git
    cd guessing-game
    ```

2.  Install dependencies:

```bash
npm install
```

3.  Configure Environment Variables:
    Create a .env file in the root directory.
    Add the following variables:

```
PORT=3000
MONGODB_URI=your_mongodb_uri
```

4.  Start the development server:

```
npm run dev
```

5.  Open your browser and navigate to `http://localhost:3000`

6.  To play the Game:
    i. Start the development server:

```
npm run dev
```

ii. Open your browser and navigate to `http://localhost:3000`

iii. Confirm the server is running by checking for the console message:

```
Server running on port 3000
```

iv. Install a simple HTTP server globally if you haven't already:

```
 npm install -g serve
```

v. Navigate to the directory containing your index.html file.

vi. Start the server:

```
serve
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
