import { MatterJsCircle } from './matterJsCircle.js';

export class Peg extends MatterJsCircle {
  constructor(x, y, r, world, engine) {
    const isStatic = true;
    super(x, y, r, isStatic, world, engine);
  }
}
