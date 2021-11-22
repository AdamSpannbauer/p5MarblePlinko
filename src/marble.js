import { MatterJsCircle } from './matterJsCircle.js';

export class Marble extends MatterJsCircle {
  constructor(x, y, r, world, engine) {
    const isStatic = false;
    const restitution = 0.7;

    super(x, y, r, isStatic, world, engine);
    this.body.restitution = restitution;
  }
}
