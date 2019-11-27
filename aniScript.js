var canvas=document.getElementById("animationCanvas");
var c=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;



var x=Math.random()*innerWidth;
var y=Math.random()*innerHeight;
var dx=10;
var dy=10;
var r=40;


function animate(){
  requestAnimationFrame(animate);

  c.clearRect(0,0,innerWidth,innerHeight);

  c.beginPath();
  c.arc(x,y,r,0,Math.PI*2);
  c.strokeStyle="red";
  c.stroke();
  if(x+r>innerWidth||x-r<0){
    dx=-dx;

  }
if(y+r>innerHeight||y-r<0){
  dy=-dy;
}
  x+=dx;//x=x+dx

y+=dy;//y=y+dy


}
animate();
