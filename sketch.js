function setup() {
  createCanvas(1600,800);
}

function draw() {
  background(200,200,200); 
  triangle(671,264,781,264,726,164)
  rect(671,264,110,110)
  rect(538,374,330,100)
  rect(868,374,50,400)
  rect(538,374,50,400)
  triangle(868,374,918,374,893,346)
  triangle(538,374,587,374,563,346)
  rect(587,714,280,100)
  rect(671,594,110,120)
  triangle(671,594,780,594,726,542)
  text(mouseX+""+mouseY,100,100)
  drawSprites(
    
  );
}