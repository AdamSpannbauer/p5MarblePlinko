/* globals Matter */

export class MatterJsRectangle {
  constructor(x, y, w, h, isStatic, world, engine) {
    this.w = w;
    this.h = h;
    this.body = Matter.Bodies.rectangle(x, y, w, h, { isStatic });
    world.add(engine.world, this.body);
  }

  get x() {
    return this.body.position.x;
  }

  set x(x) {
    this.body.position.x = x;
  }

  get y() {
    return this.body.position.y;
  }

  set y(y) {
    this.body.position.y = y;
  }

  draw() {
    const {
      x, y, w, h,
    } = this;

    rect(x, y, w, h);
  }
}
