const canvasW = 512;
const canvasH = 512;

window.setup = () => {
  createCanvas(canvasW, canvasH);

  noFill();
  stroke(0);
  strokeWeight(2);
};

window.draw = () => {
  clear();
  ellipse(width / 2, height / 2, 100, 100);
  noLoop();
};
