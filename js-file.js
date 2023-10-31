// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('content');
content.textContent = "Hey I'm red";
content.style.color = "red";

container.appendChild(content);

const content1 = document.createElement('h3');
content1.classList.add('content');
content1.textContent = "I'm a blue h3";
content1.style.color = "blue";

container.appendChild(content1);