/* eslint-disable no-underscore-dangle */
/* globals Matter */

export const initMatterJs = () => {
  const { Engine } = Matter;
  const { World } = Matter;
  const myEngine = Engine.create();

  return { World, Engine, myEngine };
};

export const setSeed = (seed = 42) => {
  randomSeed(seed);
  noiseSeed(seed);

  Matter.Body._nextCollidingGroupId = 1;
  Matter.Body._nextNonCollidingGroupId = -1;
  Matter.Body._nextCategory = 0x0001;

  Matter.Common._seed = seed;
  Matter.Common._nextId = 0;
};
