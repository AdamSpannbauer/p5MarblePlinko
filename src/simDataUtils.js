/* eslint-disable no-param-reassign */
export const restartRace = (marbles) => {
  marbles.forEach((m) => {
    m.restart();
  });
};

export const finishRace = (marbles, maxTimeSeconds = 10) => {
  let finished = false;
  let nFinished = 0;
  let dataObj = {};

  marbles.forEach((m) => {
    if (m.finished) nFinished += 1;
    dataObj[`[${m.fill}]`] = m.finishedStats.time;
  });

  if (nFinished === marbles.length) {
    finished = true;
  } else {
    const currentTimeSeconds = marbles[0].frameCounter / 60;
    if (currentTimeSeconds > maxTimeSeconds) {
      dataObj = null;
      finished = true;
    }
  }

  return [finished, dataObj];
};

export const downloadResults = (exportObj, exportName = 'marbleRaceTimes') => {
  // encode data
  const strObject = encodeURIComponent(JSON.stringify(exportObj));
  const dataStr = `data:text/json;charset=utf-8,${strObject}`;

  // create download link
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute('href', dataStr);
  downloadAnchorNode.setAttribute('download', `${exportName}.json`);
  document.body.appendChild(downloadAnchorNode); // required for firefox

  // download and remove download link
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};

export const endSimulation = (
  marbles,
  nRaces = 200,
  raceData = { raceData: [] },
  raceCounter = 0,
) => {
  const [finished, thisRaceData] = finishRace(marbles);
  if (finished) {
    if (thisRaceData !== null) {
      raceCounter += 1;
      raceData.raceData.push(thisRaceData);
    }

    if (raceCounter >= nRaces) {
      downloadResults(raceData);
      noLoop();
    }

    restartRace(marbles);
  }

  return raceCounter;
};
