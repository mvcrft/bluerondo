console.log("hello world");
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var rightCol = document.querySelector(".rightcol");
rWidth = rightCol.clientWidth
console.log(window.resize);

canvas.width = rWidth;
canvas.height= rWidth;

ctx.fillStyle = "white";
ctx.fillRect(0,0,rWidth,rWidth);
