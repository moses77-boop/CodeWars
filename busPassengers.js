var number = function (busStops) {
  let peopleOnBus = 0;

  for (let i = 0; i < busStops.length; i++) {
    const getOn = busStops[i][0];
    const getOff = busStops[i][1];

    peopleOnBus = peopleOnBus + getOn - getOff;
  }
  return peopleOnBus;
};
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ]),
);
