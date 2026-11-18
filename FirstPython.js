var list = [
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 30,
    language: "Python",
  },
  {
    firstName: "Emma",
    lastName: "B.",
    country: "Norway",
    continent: "Europe",
    age: 19,
    language: "Clojure",
  },
];

function getFirstPython(list) {
  const pythonDeveloper = list.find(
    (developer) => developer.language === "Python",
  );

  if (pythonDeveloper === undefined) {
    return "There will be no Python developers";
  }
  return `${pythonDeveloper.firstName}, ${pythonDeveloper.country}`;
}
console.log(getFirstPython(list));

// function getFirstPython(list) {
//   for (const item of list) {
//     if (item.language === 'Python') {
//       return `${item.firstName}, ${item.country}`; // return stops the loop immediately
//     }
//   }
//   return 'There will be no Python developers'; // only reached if no match was found
// }
