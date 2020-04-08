// GET FUNCTION
const get = (selector) => {
  return document.querySelector(selector);
};

//GET ALL FUNCTION
const getAll = (selector) => {
  return document.querySelectorAll(selector);
};
//GET ALL ELEMENTS
const tags = (selector) => {
  return document.getElementsByTagName(selector);
};
// VARIABLES
const logoo = get(".logo-heading");
const navv = get(".nav");
const first = get(".intro");
const lets = get(".text-content");
const wideimg = get("#wide");
const body = get("body");
const html = get("document");
const header = get(".main-navigation");
const funBusBanner = get("#fun");
const nav = get(".nav");
const ptag = document.getElementsByTagName("p");

////////////All Selector
const buttons = getAll(".btn");
const par = tags("p");

////////////Button Function
function red(event) {
  event.target.style.backgroundColor = "red";
}
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("dblclick", red);
}
//////////Button Text Color
function black(event) {
  event.target.style.color = "black";
}
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("dblclick", black);
}

///////////Logo Hover/ Nested

function logoHover(event) {
  event.target.style.color = "blue";
}
logoo.addEventListener("mouseover", logoHover);

function logoLeave(event) {
  event.target.style.color = "black";
}
logoo.addEventListener("mouseleave", logoLeave);

//////////// Troll Opacity Body Event
function Opacity(event) {
  event.target.style.opacity = 1;
  if (event.key === "ArrowDown") {
    event.target.style.opacity = 0.5;
  }
}
body.addEventListener("keydown", Opacity);

//////// Load Event
function loader(event) {
  event.target.style.display = "none";
}
wideimg.addEventListener("load", loader);

///// Scroll Event
function scroller(event) {
  event.target.style.backgroundColor = "lightcyan";
  console.log("scrolling baby");
}
document.addEventListener("wheel", scroller);

///DRAG EVENT
function dragger(event) {
  event.target.style.transform = "scale(.5)";
}
funBusBanner.addEventListener("drag", dragger);

///STOP FROM REFRESHING

function stopRefresh(event) {
  console.log("clicked on navlink");
  event.target.preventDefault;
}
nav.addEventListener("click", stopRefresh);

//Paragraph Event Load
function loadPara(event) {
  event.target.style.color = "green";
}
ptag.addEventListener("load", loadPara);
