const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-button");
const sendButton = document.querySelector(".chat-container");
const sendButton = document.querySelector("#send-button");
const deleteButton = document.querySelector("#delete-button");

let userText = null;
const API_KEY = "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";

const loadDataFromLocalStorage = () => {
  const themeColor = localStorage.getItem("themeColor");

  document.body.classList.toogle("light-mode", themeColor === "light_mode");
  themeButton.innerText = document.body.classList.contains("light-mode") ?
  "dark_mode" : "light_mode";
};
