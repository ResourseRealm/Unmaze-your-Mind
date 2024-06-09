function openChat(washerName) {
    document.getElementById('chat-box').style.display = 'block';
    document.querySelector('#chat-box header').textContent = 'Chat with ' + washerName;
    document.querySelector('#chat-box .content').innerHTML = '';
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    if (message) {
        const content = document.querySelector('#chat-box .content');
        const msgDiv = document.createElement('div');
        msgDiv.textContent = message;
        content.appendChild(msgDiv);
        chatInput.value = '';
        // Immediate response simulation
        setTimeout(() => {
            const responseDiv = document.createElement('div');
            responseDiv.textContent = 'listener: I am here to assist you!';
            content.appendChild(responseDiv);
        }, 1000);
    }
}

function addToCart(washerName) {
    document.getElementById('payment-page').style.display = 'flex';
    document.getElementById('payment-washer').textContent = 'Booking Washer: ' + washerName;
}

function confirmPayment() {
    alert('Payment Confirmed! Your listener has been booked.');
    document.getElementById('payment-page').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('payment-page')) {
        document.getElementById('payment-page').style.display = 'none';
    }
    if (event.target == document.getElementById('chat-box')) {
        document.getElementById('chat-box').style.display = 'none';
    }
}