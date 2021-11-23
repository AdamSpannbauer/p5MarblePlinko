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
    Matter.Body.setPosition(this.body, { x, y: this.y });
    Matter.Body.setVelocity(this.body, { x: 0, y: 0 });
    Matter.Body.setAngularVelocity(this.body, 0);
    Matter.Body.setAngle(this.body, 0);
  }

  get y() {
    return this.body.position.y;
  }

  set y(y) {
    Matter.Body.setPosition(this.body, { x: this.x, y });
    Matter.Body.setVelocity(this.body, { x: 0, y: 0 });
    Matter.Body.setAngularVelocity(this.body, 0);
    Matter.Body.setAngle(this.body, 0);
  }

  draw() {
    const { x, y, drawRadius } = this;
    ellipse(x, y, drawRadius * 2, drawRadius * 2);
  }
}
