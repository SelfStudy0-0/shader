let exampleShader;

//load in the shader
function preload(){
  exampleShader = loadShader("example.vert", "example.frag");
}

function setup() {
  //import "WEBGL" to do custom shader or render 3D shape
  createCanvas(400, 400,WEBGL);
  
  //tell p5 to use the shader
  shader(exampleShader);
  
  noStroke();
}

function draw() {
  clear();
  
  rect(0, 0, width, height);
}
