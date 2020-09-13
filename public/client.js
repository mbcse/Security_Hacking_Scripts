const socket = io();
let name;
let key;
let textarea = document.querySelector("#textarea");
let messageArea = document.querySelector(".message__area");
do {
  name = prompt("Please enter your name: ");
  do {
    key = prompt("Please enter your encryption Key: ").toUpperCase();
  } while (!key);
} while (!name);

document.getElementById("nameid").innerHTML = name;
document.getElementById("keyid").innerHTML = key;

textarea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    sendMessage(e.target.value.toUpperCase().trim());
  }
});

function sendMessage(message) {
  console.log(message);
  let msg = {
    user: name,
    message: message,
  };
  // Append
  appendMessage(msg, "outgoing");
  textarea.value = "";
  scrollToBottom();

  // Send to server
  msg.message = encrypt(msg.message, key);
  socket.emit("message", msg);
}

function appendMessage(msg, type) {
  let mainDiv = document.createElement("div");
  let className = type;
  mainDiv.classList.add(className, "message");
  let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `;
  mainDiv.innerHTML = markup;
  messageArea.appendChild(mainDiv);
}

// Recieve messages
socket.on("message", (msg) => {
  msg.message = decrypt(msg.message, key);
  appendMessage(msg, "incoming");
  scrollToBottom();
});

function scrollToBottom() {
  messageArea.scrollTop = messageArea.scrollHeight;
}

//*******************ENCRYPTION ALGOS***************** */
function convertKey(text, keyy) {
  var nkey = "";
  var l = keyy.length;
  for (var i = 0; i < text.length; i++) {
    nkey += keyy[i % l];
  }

  return nkey;
}
function encrypt(text, nkey) {
  nkey = convertKey(text, nkey);
  var enctxt = "";
  for (var i = 0; i < text.length; i++) {
    if (text[i] == " ") enctxt += " ";
    else
      enctxt += String.fromCharCode(
        ((text[i].charCodeAt(0) + nkey[i].charCodeAt(0)) % 26) + 65
      );
  }
  return enctxt;
}

function decrypt(text, nkey) {
  nkey = convertKey(text, nkey);
  var dectxt = "";
  for (var i = 0; i < text.length; i++) {
    if (text[i] == " " && i < text.length) dectxt += " ";
    else
      dectxt += String.fromCharCode(
        ((text[i].charCodeAt(0) - nkey[i].charCodeAt(0) + 26) % 26) + 65
      );
  }
  return dectxt;
}
