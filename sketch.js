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
const utOrange = [255, 130, 0];
const marbleColors = [
  [255, 255, 0],
  [0, 255, 0],
  utOrange,
];

window.setup = () => {
  createCanvas(canvasW, canvasH);
  rectMode(CENTER);

  marbleColors.forEach((c) => {
    const b = marbleRadius * 2;
    const x = random(b, width - b);
    const y = 0;

    const marble = new Marble(x, y, marbleRadius, c, World, myEngine);
    marbles.push(marble);
  });

  pegBoard = new PegBoard(pegRadius, World, myEngine);
  walls = new ScreenWalls(World, myEngine);
};

window.draw = () => {
  Engine.update(myEngine);

  background(108, 56, 34);

  marbles.forEach((m) => {
    m.checkFinish();
    m.draw();
  });
  pegBoard.draw();
  walls.draw();
};
