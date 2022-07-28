var b1,b2
function setup() 
{
  createCanvas(400, 400);
  b1=new Box(50,50,100,100)
  b2=new Box(75,25,30,150)
}

function draw() 
{
  background(220);
b1.display()
b2.display()
}

