const firebaseConfig = {
    apiKey: "AIzaSyCoYgs8XEp2gXrHwrevAql9f1SGyVLNnLE",
    authDomain: "chat-app-824da.firebaseapp.com",
    databaseURL: "https://chat-app-824da-default-rtdb.firebaseio.com",
    projectId: "chat-app-824da",
    storageBucket: "chat-app-824da.appspot.com",
    messagingSenderId: "763980494785",
    appId: "1:763980494785:web:105991d6dbf8ef31172140",
    measurementId: "G-LK0BY0E7FN"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

const usernameInput = document.getElementById('username-input');
const startButton = document.getElementById('start-button');
const chatContainer = document.getElementById('chat-container');
const displayUsername = document.getElementById('display-username');

startButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();

    if (username !== '') {
        chatContainer.style.display = 'block';
        document.getElementById('get-started').style.display = 'none';
        displayUsername.textContent = username;
    }
});

const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesDiv = document.getElementById('messages');

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const message = {
            text: messageText,
            username: displayUsername.textContent,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        };

        messagesRef.push(message);
        messageInput.value = '';
    }
});

messagesRef.on('child_added', (snapshot) => {
    const message = snapshot.val();
    const messageElement = document.createElement('div');
    messageElement.textContent = message.text;

    if (message.username === displayUsername.textContent) {
        // Messages from the user
        messageElement.classList.add('message', 'sender');
    } else {
        // Messages from others
        messageElement.classList.add('message', 'receiver');
    }

    const usernameElement = document.createElement('div');
    usernameElement.textContent = message.username;
    usernameElement.classList.add('username');

    const timestampElement = document.createElement('div');
    timestampElement.textContent = formatTimestamp(message.timestamp);
    timestampElement.classList.add('timestamp');

    messageElement.appendChild(usernameElement);
    messageElement.appendChild(timestampElement);
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
}
