//1. parent node
const makeParent = document.getElementById("main-container");
console.log(makeParent);

//2.create child node
const createChild = document.createElement("section");
createChild.innerText = "this a created child element";
// console.log(createChild);
const createH1 = document.createElement("h1");
// console.log(createH1);
createH1.innerText = "Place i want to visit";
createChild.appendChild(createH1);

// 3. append placessection to main container

makeParent.appendChild(createChild);
