const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var width = canvas.width; //800
var height = canvas.height; //500

var initalX = 0,
  initalY = 0;

var squareSize = 100
let whiteNoise = () => {
  ctx.beginPath();
  
  for (let x = 0; x < 800; x += 5) {
    for (let y = 0; y < 450; y += 5) {
      ctx.moveTo(initalX + x, initalY + y);
      ctx.fillStyle = Math.round(Math.random())?"black":"white";
      ctx.fillRect(x, y, squareSize, squareSize);
      ctx.closePath();
    }
  }

  ctx.stroke();
};

setInterval(whiteNoise, 25);
