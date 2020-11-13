var movingrect, fixedrect;

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(200, 300, 50, 100);
  fixedrect = createSprite(200, 100, 100, 50);

  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";

  movingrect.debug=true;
  fixedrect.debug=true;

  movingrect.velocityY=-3;
  fixedrect.velocityY=3;

}

function draw() {
  background(0);  

  //movingrect.x=mouseX;
  //movingrect.y=mouseY;



  /*if (movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2 && 
    fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2 &&
    movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2&&
    fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2)
  {
  movingrect.shapeColor="red";
  fixedrect.shapeColor="yellow";
  }
  else{
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
  }*/

  if (movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2 && 
    fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2)
    {
      movingrect.velocityX=movingrect.velocityX*-1;
      fixedrect.velocityX=fixedrect.velocityX*-1;
    }

    if(movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2&&
      fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2)
{
  movingrect.velocityY=movingrect.velocityY*-1;
  fixedrect.velocityY=fixedrect.velocityY*-1;

} 

drawSprites();
}