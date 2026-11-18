var list1 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 65,
    language: "JavaScript",
  },
];

function isSameLanguage(list1) {
  const firstLanguage = list1[0].language;

  return list1.every(function (developer) {
    return developer.language === firstLanguage;
  });
}

// function isSameLanguage(list1){
//     const firstLanguage = list1[0].language;

//     for(const item of list1){
//         if(item.language !== firstLanguage){
//             return false;
//         }
//     }
//     return true;
// }
