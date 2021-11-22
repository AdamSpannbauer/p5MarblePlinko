import { MatterJsRectangle } from './matterJsRect.js';

export class ScreenWalls {
  constructor(world, engine) {
    const isStatic = true;

    const cx = width / 2;
    const cy = height / 2;
    const w = 100;

    const b = w / 2;
    const x1 = -b;
    const x2 = width + b;
    const y2 = height + b;

    this.leftWall = new MatterJsRectangle(x1, cy, w, height, isStatic, world, engine);
    this.rightWall = new MatterJsRectangle(x2, cy, w, height, isStatic, world, engine);
    // this.bottomWall = new MatterJsRectangle(cx, y2, width, w, isStatic, world, engine);

    this.walls = [
      this.leftWall,
      this.rightWall,
      // this.bottomWall,
    ];
  }

  draw() {
    this.walls.forEach((w) => w.draw());
  }
}
