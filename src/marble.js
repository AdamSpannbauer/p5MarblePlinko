import { MatterJsCircle } from './matterJsCircle.js';

const UT = { r: 255, g: 130, b: 0 };
const cheatingRScl = 0.8;

export class Marble extends MatterJsCircle {
  constructor(x, y, r, cFill, world, engine) {
    const isStatic = false;
    const restitution = 0.7;

    // Cheating...
    let rScl = 1;
    const [cr, cg, cb] = cFill;
    if (UT.r === cr && UT.g === cg && UT.b === cb) {
      rScl = cheatingRScl;
    }

    super(x, y, r * rScl, isStatic, world, engine);
    this.body.restitution = restitution;

    this.fill = cFill;
    this.drawRadius = r;
    this.finished = false;
    this.finishedStats = {
      x: null,
      time: null,
    };
  }

  checkFinish() {
    if (this.finished) return;

    const { x, y, r } = this;
    if (y + r >= height) {
      this.finished = true;
      this.finishedStats = {
        x, time: frameCount / 60,
      };
    }
  }

  draw() {
    push();
    fill(this.fill);
    stroke(this.fill);

    if (this.finished) {
      const { r } = this;
      const { x, time: t } = this.finishedStats;
      stroke(this.fill);
      textSize(20);

      text(`${t.toFixed(2)}s`, x, height - r);
    }

    super.draw();
    pop();
  }
}
