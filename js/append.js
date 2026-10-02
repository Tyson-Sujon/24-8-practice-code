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
//create ul child in section
const createUl = document.createElement('ul');
//append or show ul child in section
createChild.appendChild(createUl);

//create li child in section
const createLi1=document.createElement('li');
createLi1.innerText='Physics';
//append or show li child in section
createUl.appendChild(createLi1);

//create li child in section
const createLi2=document.createElement('li');
createLi2.innerText='chemistry';
//append or show li child in section
createUl.appendChild(createLi2);

//create li child in section
const createLi3=document.createElement('li');
createLi3.innerText='Math';
//append or show li child in section
createUl.appendChild(createLi3);

//create li child in section
const createLi4=document.createElement('li');
createLi4.innerText='Biology';
//append or show li child in section
createUl.appendChild(createLi4);


// 3. append placessection to main container

makeParent.appendChild(createChild);



