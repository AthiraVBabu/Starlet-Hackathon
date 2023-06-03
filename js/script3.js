function sendMessage() {
  var userInput = document.getElementById("user-input");
  var userMessage = userInput.value;

  if (userMessage.trim() !== "") {
    var chatbotBody = document.getElementById("chatbot-body");
    var chatContainer = document.createElement("div");
    var userChat = document.createElement("div");

    chatContainer.classList.add("chat-container");
    userChat.classList.add("chat-message", "user-message");
    userChat.innerHTML = "<p>" + userMessage + "</p>";

    chatContainer.appendChild(userChat);
    chatbotBody.appendChild(chatContainer);

    var botMessage = generateBotResponse(userMessage);
    var botChat = document.createElement("div");
    botChat.classList.add("chat-message", "bot-message");
    botChat.innerHTML = "<p>" + botMessage + "</p>";

    chatContainer.appendChild(botChat);
    userInput.value = "";

    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  }
}

function generateBotResponse(userMessage) {
  var response = "";
  
  var lowercaseMessage = userMessage.toLowerCase();

  if (lowercaseMessage.includes("hello") || lowercaseMessage.includes("hi")) {
    response = "Hello! What is your current mood? Please choose one among the list 1.anxious 2.stressed 3.depressed 4.calm 5.happy";
  } else if (lowercaseMessage.includes("1")) {
    response = "Kindly refer to audio therapy,";
  } else if (lowercaseMessage.includes("2")) {
    response = "Kindly refer to yoga therapy,color therapy";
  }else if (lowercaseMessage.includes("3")) {
    response = "Kindly refer to reading therapy,audio therapy";
  }else if (lowercaseMessage.includes("4")) {
    response = "Kindly refer to yoga therapy";
  }else if (lowercaseMessage.includes("5")) {
    response = "Kindly refer to laughter therapy,game therapy";
  }
   else {
    response = "Hope you are happy now 😊.";
  }

  return response;
}
