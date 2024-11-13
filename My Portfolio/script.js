function sendMessage() {
    let userMessage = document.getElementById('userInput').value;
    if (userMessage.trim() !== "") {
        // Display the user's message
        let messageDiv = document.createElement('p');
        messageDiv.textContent = "You: " + userMessage;
        document.getElementById('messages').appendChild(messageDiv);
        
        // Clear the input field
        document.getElementById('userInput').value = "";

        // Simulate auto-reply after a delay
        setTimeout(() => {
            let autoReplyDiv = document.createElement('p');
            autoReplyDiv.textContent = "Auto-Reply: Thank you for your message. We will get back to you soon.";
            document.getElementById('messages').appendChild(autoReplyDiv);
        }, 1000); // Delay in ms (1 second)
    }
}
