// chatbot-server.js

const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const jokes = [
  'Why don\'t scientists trust atoms? Because they make up everything!',
  'Parallel lines have so much in common. It\'s a shame they\'ll never meet.',
  'Why don\'t some couples go to the gym? Because some relationships don\'t work out!',
  'Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.',
];

function getChatbotResponse(message) {
  const lowercaseMessage =String(message).toLowerCase().trim(); 

  if (lowercaseMessage === 'hello') {
    return 'Hello there!';
  } else if (lowercaseMessage === 'how are you?') {
    return 'I am just a chatbot. But thanks for asking!';
  } else if (lowercaseMessage === 'what is your name?') {
    return 'I am a Rule-based Chatbot.';
  } else if (lowercaseMessage === 'tell me a joke') {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  } else {
    return 'I don\'t understand. Can you please rephrase your question?';
  }
}

app.use(express.static('.'));

wss.on('connection', (ws) => {
  console.log('A client connected.');

  ws.on('message', async (message) => {
    console.log('Received:', message);

    const response = await getChatbotResponse(message);
    ws.send(response);
    
  });
});

server.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});
