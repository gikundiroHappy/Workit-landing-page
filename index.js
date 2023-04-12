function display(obj, colorName) {
  obj.style.backgroundColor = colorName;
}
function inchange() {
  this.setAttribute("src", "./images/profile2.webp");
}
function outchange() {
  this.setAttribute("src", "./images/profile.png");
}
function cards() {
  document.getElementById("middle").style.display = "flex";
}
function lineOn() {
  document.getElementById("apply").style.textDecoration = "none";
}
function lineOut() {
  document.getElementById("apply").style.textDecoration = "underline";
  document.getElementById("apply").style.textDecorationColor =
    "rgb(96, 248, 96)";
  document.getElementById("apply").style.cursor = "pointer";
}
function onLine() {
  document.getElementById("line").style.textDecoration = "none";
}
function outLine() {
  document.getElementById("line").style.textDecoration = "underline";
  document.getElementById("line").style.textDecorationColor =
    "rgb(96, 248, 96)";
  document.getElementById("line").style.cursor = "pointer";
}
