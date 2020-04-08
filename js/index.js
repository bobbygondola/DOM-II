// GET FUNCTION
const get = (selector) => {
  return document.querySelector(selector);
};

const getAll = (selector) => {
  return document.querySelectorAll(selector);
};

// VARIABLES
const logoo = get(".logo-heading");
const navv = get(".nav");
const first = get(".intro");
const lets = get(".text-content");
const wideimg = get("#wide");
const body = get("body");

////////////All Selector
const buttons = getAll(".btn");

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

///////////Logo Hover

function logoHover(event) {
  event.target.style.color = "blue";
}
logoo.addEventListener("mouseover", logoHover);

function logoLeave(event) {
  event.target.style.color = "black";
}
logoo.addEventListener("mouseleave", logoLeave);

//////////// Troll Opacity Body

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

////// select event
function selecter(event) {
  event.target.console.log();
}
navv.addEventListener("select", selecter);

///////