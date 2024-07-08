import messages from "./text.js";

window.addEventListener("DOMContentLoaded", () => {
  const engTextArea = document.querySelector(".text__eng");
  const translateTextArea = document.querySelector(".text__translate");
  const generateBtn = document.querySelector(".generate__button");

  function getRandomMessage(messages) {
    const randomIndex = Math.floor(Math.random() * messages.messages.length);
    const message = messages.messages[randomIndex];
    innerText(message);
  }

  function innerText(message) {
    engTextArea.innerText = message.text;
    translateTextArea.innerText = message.translation;
  }

  function copyClipboard(text) {
    return navigator.clipboard.writeText(text);
  }

  engTextArea.addEventListener("click", () => {
    copyClipboard(engTextArea.innerText);
  });

  generateBtn.addEventListener("click", () => {
    getRandomMessage(messages);
  });

  getRandomMessage(messages);
});
