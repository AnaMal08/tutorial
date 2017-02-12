var canvas, ctx;
var recx = 500;
var recy = 40;
canvas = document.getElementById("sm");
ctx = canvas.getContext("2d");

	ctx.font="15px Georgia";
	ctx.fillText("A = PI*a*b",100,230);
  ctx.fillText("A = 1/2*PI*r^2",310,230);
  ctx.fillText("A = a * b",520,230);
  ctx.fillText("A = a^2",120,430);
  ctx.fillText("A = PI*r^2",310,430);
  ctx.fillText("A = 1/2 * a  * h",500,430);
 
 ctx.beginPath();
    ctx.arc(350, 180, 70, 0, Math.PI, true);
    ctx.fillStyle = "Green";
    ctx.fill();
 ctx.beginPath();
		ctx.arc(350, 350, 50, 0, 2 * Math.PI, false);
    ctx.fillStyle = "Green";
    ctx.fill();
 ctx.beginPath();
 		ctx.rect(100,300,100,100);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.strokeStyle = "Black";
    ctx.lineWidth = 1;
    ctx.stroke();
 ctx.beginPath();
 		ctx.beginPath();
	ctx.ellipse(150, 150, 50, 90, 90 * Math.PI/180, 	0, 2 * Math.PI);
		ctx.stroke();
    ctx.fillStyle = "blue";
    
    ctx.fill();

       
 ctx.beginPath();
    ctx.moveTo(550, 300);
    ctx.lineTo(600, 400);
    ctx.lineTo(500, 400);
    ctx.lineTo(550, 300);
    ctx.strokeStyle = "Red";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fillStyle = "Purple";
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(recx, recy);
    ctx.lineTo(recx + 100, recy);
    ctx.lineTo(recx + 100, recy +140);
    ctx.lineTo(recx, recy +140);
    ctx.lineTo(recx, recy);
    ctx.strokeStyle = "Red";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fillStyle = "Yellow";
    ctx.fill();
    
 
