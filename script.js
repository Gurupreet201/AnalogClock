var canvas = document.getElementById("canvas");
var con = document.getElementById("container");
console.log(con);
var ctx = canvas.getContext("2d");
var i = 0;
var colours = [
  "#28d1fa",
  "	#009F6B",
  "	#EE204E",
  "#FB607F",
  "#FCAE1E",
  "#FDA172",
  "#56fca2",
  "#ff6ffc",
  "#ff9889",
  "#fc7a23",
];
var bodycolours = [
  "#28b8d9",
  "#008a5d",
  "#d91e48",
  "#d94e6a",
  "#eba21c",
  "#eb956a",
  "#52eb98",
  "#e663e3",
  "#eb8c7f",
  "#f07a2b",
];
var button = document.getElementById("button");
button.addEventListener("click", function () {
  if (i < colours.length) {
    i++;
    ctx.strokeStyle = colours[i];
    ctx.shadowColor = colours[i];
    con.style.backgroundColor = bodycolours[i];
  } else {
    i = 0;
    ctx.strokeStyle = colours[i];
    ctx.shadowColor = colours[i];
    con.style.backgroundColor = bodycolours[i];
  }
});
con.style.backgroundColor = colours[i];
ctx.strokeStyle = "#28d1fa";

ctx.lineWidth = 17;
ctx.lineCap = "round";
ctx.shadowBlur = 15;
ctx.shadowColor = "#28d1fa";

function degToRad(degree) {
  var factor = Math.PI / 180;
  return degree * factor;
}

function renderTime() {
  var now = new Date();
  var today = now.toDateString();
  var time = now.toLocaleTimeString();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var miliseconds = now.getMilliseconds();
  var newSeconds = seconds + miliseconds / 1000;

  var gradient = ctx.createRadialGradient(200, 200, 5, 200, 200, 300);
  gradient.addColorStop(0, "#09303a");
  gradient.addColorStop(1, "#000000");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 500, 500);

  // Hours
  ctx.beginPath();
  ctx.arc(250, 250, 230, degToRad(270), degToRad(hours * 30 - 90));
  ctx.stroke();

  // Minutes
  ctx.beginPath();
  ctx.arc(250, 250, 200, degToRad(270), degToRad(minutes * 6 - 90));
  ctx.stroke();

  // Seconds
  ctx.beginPath();
  ctx.arc(250, 250, 170, degToRad(270), degToRad(newSeconds * 6 - 90));
  ctx.stroke();

  // Date
  ctx.font = "30px Helvetica";
  ctx.fillStyle = colours[i];
  ctx.fillText(today, 140, 240);

  // Time
  ctx.font = "25px Helvetica";
  ctx.fillStyle = colours[i];
  ctx.fillText(time, 180, 280);
}

setInterval(renderTime, 40);
