/* globals Matter */

export class MatterJsCircle {
  constructor(x, y, r, isStatic, world, engine) {
    this.body = Matter.Bodies.circle(x, y, r, { isStatic });
    this.drawRadius = r;
    world.add(engine.world, this.body);
  }

  get r() {
    return this.body.circleRadius;
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
    const { x, y, drawRadius } = this;
    ellipse(x, y, drawRadius * 2, drawRadius * 2);
  }
}
