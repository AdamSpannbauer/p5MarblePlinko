/* globals Matter */

export const initMatterJs = () => {
  const { Engine } = Matter;
  const { World } = Matter;
  const myEngine = Engine.create();

  return { World, Engine, myEngine };
};
