// const x = document.getElementById("players-container");
// console.log(document.getElementById("players-container"));

//1. create element and set innerText or innerHTML
const newChild = document.createElement("li");
newChild.innerText = "New born footballer ";

//2. find the parent where you will add the child

const playersList = document.getElementById("player-list");

//3. append the child to the parent (11.25)
playersList.appendChild(newChild);
