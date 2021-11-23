import { initMatterJs, setSeed } from './src/matterjsUtils.js';
import { Marble } from './src/marble.js';
import { PegBoard } from './src/pegBoard.js';
import { ScreenWalls } from './src/screenWalls.js';
import { endSimulation, restartRace } from './src/simDataUtils.js';
import { positionCanvas } from './src/positionCanvas.js';

const canvasW = 512;
const canvasH = 512;
let cnv;

const { World, Engine, myEngine } = initMatterJs();

const pegRadius = 10;
const marbleRadius = pegRadius * 2;

let pegBoard;
let walls;
const marbles = [];
const utOrange = [255, 130, 0];
const marbleColors = [
  [255, 255, 0],
  utOrange,
  [0, 255, 0],
];

window.repeatAndDownloadData = false;
const nRaces = 2;
let raceCounter = 0;
const raceData = { raceData: [] };

window.keyTyped = () => {
  if (key === 'r') {
    restartRace(marbles);
  } else if (key === 'c') {
    const nextSeed = floor(random(1000));
    setSeed(123);
    restartRace(marbles);
    randomSeed(nextSeed);
  }
};

window.windowResized = () => {
  positionCanvas(cnv);
};

window.setup = () => {
  cnv = createCanvas(canvasW, canvasH);
  positionCanvas(cnv);
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
  if (window.repeatAndDownloadData) {
    raceCounter = endSimulation(marbles, nRaces, raceData, raceCounter);
  }

  Engine.update(myEngine);

  background(108, 56, 34);

  marbles.forEach((m, i) => {
    // eslint-disable-next-line no-param-reassign
    m.frameCounter += 1;
    m.checkFinish();
    m.draw(i);
  });

  pegBoard.draw();
  walls.draw();

  push();
  stroke(55, 18, 3);
  fill(55, 18, 3);
  text('"R" to restart', 10, height - 10);
  pop();
};
