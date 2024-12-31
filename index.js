function breakingRecords(scores) {
  let hiScores = scores[0];
  let loScores = scores[0];

  let hiBroke = 0;
  let loBroke = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > hiScores) {
      hiScores = scores[i];
      hiBroke++;
    }

    if (scores[i] < loScores) {
      loScores = scores[i];
      loBroke++;
    }
  }

  return [hiBroke, loBroke];
}

console.log(breakingRecords([12, 24, 10, 24]));
