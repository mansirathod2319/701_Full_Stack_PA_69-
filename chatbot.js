// chatbot.js

const jokes = [
    'Why don\'t scientists trust atoms? Because they make up everything!',
    'Parallel lines have so much in common. It\'s a shame they\'ll never meet.',
    'Why don\'t some couples go to the gym? Because some relationships don\'t work out!',
    'Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.',
  ];
  
  function getChatbotResponse(message) {
    const lowercaseMessage = message.toLowerCase().trim();
  
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
  
  module.exports = {
    getChatbotResponse,
  };
  