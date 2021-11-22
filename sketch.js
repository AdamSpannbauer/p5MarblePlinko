import { initMatterJs } from './src/matterjsUtils.js';
import { Marble } from './src/marble.js';
import { PegBoard } from './src/pegBoard.js';
import { ScreenWalls } from './src/screenWalls.js';

const canvasW = 512;
const canvasH = 512;

const { World, Engine, myEngine } = initMatterJs();

const pegRadius = 10;
const marbleRadius = pegRadius * 2;

let pegBoard;
let walls;
const marbles = [];

window.setup = () => {
  createCanvas(canvasW, canvasH);
  rectMode(CENTER);

  const marble = new Marble(
    random(marbleRadius * 1.1, width - marbleRadius * 1.1),
    0,
    marbleRadius,
    World,

    myEngine,
  );
  marbles.push(marble);

  pegBoard = new PegBoard(pegRadius, World, myEngine);
  walls = new ScreenWalls(World, myEngine);
};

window.draw = () => {
  Engine.update(myEngine);

  background(100, 30, 30);

  marbles.forEach((m) => m.draw());
  pegBoard.draw();
  walls.draw();
};
