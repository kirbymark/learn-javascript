function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function changeDiscont(percentage) {
    document.getElementById('percent-off').textContent = percentage + '% OFF';
}


let fn = function loggingFunction (message,username) {
    console.log(username, 'you need to be aware of this:', message);
}