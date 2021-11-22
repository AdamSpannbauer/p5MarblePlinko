import { Peg } from './peg.js';

export class PegBoard {
  constructor(pegR, world, engine) {
    this.pegs = [];

    const yBuffer = pegR * 5;
    const xBuffer = pegR * 2.5;
    const rowSpacing = pegR * 6;
    const colSpacing = pegR * 8;

    let rowI = 0;
    for (let y = yBuffer + pegR; y + pegR < height - yBuffer; y += rowSpacing) {
      rowI += 1;
      const xOffset = rowI % 2 === 1 ? 0 : colSpacing / 2;
      for (let x = xBuffer + pegR; x + pegR + xOffset < width - xBuffer; x += colSpacing) {
        const peg = new Peg(x + xOffset, y, pegR, world, engine);
        this.pegs.push(peg);
      }
    }
  }

  draw() {
    this.pegs.forEach((p) => p.draw());
  }
}
