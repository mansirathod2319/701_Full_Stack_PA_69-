const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function getUserInput() {
    return new Promise((resolve) => {
        rl.question('You: ', (message) => {
            resolve(message);
        });
    });
}

function getRandomJoke() {
    const jokes = [
        'Why don\'t scientists trust atoms? Because they make up everything!',
        'Parallel lines have so much in common. It\'s a shame they\'ll never meet.',
        'Why don\'t some couples go to the gym? Because some relationships don\'t work out!',
        'Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.',
    ];

    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

function getChatbotResponse(message) {
    const lowercaseMessage = message.toLowerCase().trim();

    if (lowercaseMessage === 'hello') {
        return 'Hello there!';
    } else if (lowercaseMessage === 'how are you?') {
        return 'I am just a chatbot. But thanks for asking!';
    } else if (lowercaseMessage === 'what is your name?') {
        return 'I am a Chatbot.';
    }
    else if (lowercaseMessage === 'tell me a joke') {
        const joke = getRandomJoke();
        return joke;
    }
    else if (lowercaseMessage === 'exit') {
        rl.close();
        return 'Goodbye!';
    }
    else {
        return 'I don\'t understand. Can you please rephrase your question?';
    }
}

async function main() {

    console.log('To Start the Conversation : say hello');
    console.log('To end the conversation : say exit');
    console.log("____________________________________");
    console.log("____________________________________");
    console.log("");



    while (true) {
        const message = await getUserInput();

        const response = getChatbotResponse(message);
        console.log('Chatbot:', response);

        if (message.toLowerCase() === 'exit') {
            break;
        }
    }
}

main();